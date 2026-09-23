<template>
  <AdminLayout>
    <div class="space-y-8 max-w-6xl mx-auto">

      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-white">إدارة الخدمات / Services Management</h2>
          <p class="text-xs text-slate-400">إضافة وتعديل وحذف الخدمات وتفاصيل خطة التنفيذ</p>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="openNewService"
            class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 font-bold text-xs"
          >
            + إضافة خدمة جديدة
          </button>

          <button
            @click="handleSave"
            class="px-6 py-2.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-600 text-white text-xs shadow-lg shadow-sky-500/20"
          >
            حفظ الكل / Save All Services
          </button>
        </div>
      </div>

      <!-- Services List -->
      <div class="space-y-4">
        <div
          v-for="(service, idx) in servicesList"
          :key="service.id"
          class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4"
        >
          <div class="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 font-mono text-xs font-bold">{{ service.id }}</span>
              <h3 class="text-base font-bold text-white">{{ service.title.ar }} / {{ service.title.en }}</h3>
            </div>

            <div class="flex items-center gap-2">
              <button @click="activeEditIdx = activeEditIdx === idx ? null : idx" class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-sky-400">
                {{ activeEditIdx === idx ? 'إغلاق التعديل' : 'تعديل التفاصيل' }}
              </button>
              <button @click="removeService(idx)" class="px-3 py-1 rounded-lg bg-rose-500/10 text-xs text-rose-400 hover:bg-rose-500/20">
                حذف
              </button>
            </div>
          </div>

          <!-- Edit Form (when expanded) -->
          <div v-if="activeEditIdx === idx" class="space-y-6 pt-2">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">معرف الخدمة (ID)</label>
                <input v-model="service.id" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">اسم الخدمة (عربي)</label>
                <input v-model="service.title.ar" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">Title (English)</label>
                <input v-model="service.title.en" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">الأيقونة (Icon)</label>
                <select v-model="service.icon" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white">
                  <option value="Globe">Globe (ويب)</option>
                  <option value="Smartphone">Smartphone (جوال)</option>
                  <option value="Database">Database (أنظمة)</option>
                  <option value="Layout">Layout (تصميم UI/UX)</option>
                  <option value="Cloud">Cloud (بنية سحابية)</option>
                  <option value="Cpu">Cpu (ذكاء اصطناعي)</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] text-slate-400">الفئة (عربي)</label>
                <input v-model="service.category.ar" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">Category (English)</label>
                <input v-model="service.category.en" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">الوصف المختصر (عربي)</label>
                <textarea v-model="service.shortDescription.ar" rows="2" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
              </div>
              <div>
                <label class="text-[11px] text-slate-400">Short Description (English)</label>
                <textarea v-model="service.shortDescription.en" rows="2" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">رابط صورة الخدمة</label>
                <input v-model="service.image" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" placeholder="/images/service-web-development.svg" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">رابط فيديو YouTube (اختياري)</label>
                <input v-model="service.videoUrl" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" placeholder="https://www.youtube.com/embed/..." />
              </div>
            </div>

            <!-- What's Included Editor -->
            <div class="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-white">ما تتضمنه الخدمة / What's Included</span>
                <button @click="addWhatsIncluded(service)" class="text-[11px] text-sky-400 font-semibold">+ إضافة بند</button>
              </div>

              <div v-for="(inc, incIdx) in service.whatsIncluded" :key="incIdx" class="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <input v-model="inc.ar" placeholder="بند بالعربي" class="p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
                <div class="flex items-center gap-2">
                  <input v-model="inc.en" placeholder="Item in English" class="flex-1 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
                  <button @click="service.whatsIncluded.splice(incIdx, 1)" class="text-rose-400 text-xs p-1">حذف</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import { servicesState, saveDataset } from '@/services/dataService';
import type { ServiceItem } from '@/types/data';

const servicesList = reactive<ServiceItem[]>(JSON.parse(JSON.stringify(servicesState)));
const activeEditIdx = ref<number | null>(0);

function openNewService() {
  const newService: ServiceItem = {
    id: `service-${Date.now()}`,
    title: { ar: 'خدمة جديدة', en: 'New Service' },
    category: { ar: 'تطوير', en: 'Development' },
    shortDescription: { ar: 'وصف مختصر للخدمة الجديدة', en: 'Short description for the new service' },
    fullDescription: { ar: 'تفاصيل الخدمة الجديدة كاملة', en: 'Full details of the new service' },
    icon: 'Globe',
    whatsIncluded: [{ ar: 'ميزة أولى', en: 'First Feature' }],
    ourProcess: [
      { stepNumber: 1, title: { ar: 'التحليل', en: 'Analysis' }, description: { ar: 'تحليل المتطلبات', en: 'Requirements' } }
    ]
  };
  servicesList.unshift(newService);
  activeEditIdx.value = 0;
}

function removeService(idx: number) {
  if (confirm('هل أنت تأكد من حذف هذه الخدمة؟')) {
    servicesList.splice(idx, 1);
    activeEditIdx.value = null;
  }
}

function addWhatsIncluded(srv: ServiceItem) {
  srv.whatsIncluded.push({ ar: 'بند جديد', en: 'New Item' });
}

async function handleSave() {
  await saveDataset('services', servicesList);
}
</script>
