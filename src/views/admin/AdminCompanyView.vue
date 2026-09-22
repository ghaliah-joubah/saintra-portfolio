<template>
  <AdminLayout>
    <div class="space-y-8 max-w-5xl mx-auto">

      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-white">بيانات الشركة والإحصائيات</h2>
          <p class="text-xs text-slate-400">تعديل المعلومات التعريفية، القيم، الإحصائيات، وبيانات الاتصال</p>
        </div>

        <button
          @click="handleSave"
          class="px-6 py-2.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 text-xs transition-transform active:scale-95"
        >
          حفظ التغييرات / Save Changes
        </button>
      </div>

      <!-- Basic Info Section -->
      <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">المعلومات الأساسية / Basic Info</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs text-slate-300">اسم الشركة (عربي)</label>
            <input v-model="form.name.ar" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
          <div class="space-y-1">
            <label class="text-xs text-slate-300">اسم الشركة (English)</label>
            <input v-model="form.name.en" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs text-slate-300">الشعار التسويقي Tagline (عربي)</label>
            <input v-model="form.tagline.ar" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
          <div class="space-y-1">
            <label class="text-xs text-slate-300">Tagline (English)</label>
            <input v-model="form.tagline.en" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs text-slate-300">قصة وعن الشركة (عربي)</label>
            <textarea v-model="form.aboutStory.ar" rows="3" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
          <div class="space-y-1">
            <label class="text-xs text-slate-300">About Story (English)</label>
            <textarea v-model="form.aboutStory.en" rows="3" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">الرؤية والرسالة / Mission & Vision</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs text-slate-300">الرسالة Mission (عربي)</label>
            <textarea v-model="form.mission.ar" rows="2" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
          <div class="space-y-1">
            <label class="text-xs text-slate-300">Mission (English)</label>
            <textarea v-model="form.mission.en" rows="2" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs text-slate-300">الرؤية Vision (عربي)</label>
            <textarea v-model="form.vision.ar" rows="2" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
          <div class="space-y-1">
            <label class="text-xs text-slate-300">Vision (English)</label>
            <textarea v-model="form.vision.en" rows="2" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"></textarea>
          </div>
        </div>
      </div>

      <!-- Statistics Manager -->
      <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 class="text-lg font-bold text-white">إدارة الإحصائيات / Statistics Counter</h3>
          <button @click="addStat" class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-sky-400 font-semibold">+ إضافة إحصائية</button>
        </div>

        <div v-for="(st, idx) in form.stats" :key="idx" class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">القيمة المجمعة / Number</label>
            <input v-model.number="st.value" type="number" class="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">اللاحقة Suffix (+, %)</label>
            <input v-model="st.suffix" class="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">المسمى (عربي)</label>
            <input v-model="st.label.ar" class="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div class="flex items-center gap-2">
            <div class="flex-1">
              <label class="text-[10px] text-slate-400 block">Label (English)</label>
              <input v-model="st.label.en" class="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
            </div>
            <button @click="removeStat(idx)" class="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg mt-3 text-xs">حذف</button>
          </div>
        </div>
      </div>

      <!-- Contact Info & Socials -->
      <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">بيانات التواصل المباشرة / Contact Info</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="text-xs text-slate-300">البريد الإلكتروني Email</label>
            <input v-model="form.contact.email" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-xs text-slate-300">رقم الهاتف Phone</label>
            <input v-model="form.contact.phone" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-xs text-slate-300">رقم الواتساب WhatsApp</label>
            <input v-model="form.contact.whatsapp" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-xs text-slate-300">رابط LinkedIn</label>
            <input v-model="form.socials.linkedin" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-xs text-slate-300">رابط GitHub</label>
            <input v-model="form.socials.github" class="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
          </div>
        </div>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import { companyState, saveDataset } from '@/services/dataService';
import type { CompanyData } from '@/types/data';

const form = reactive<CompanyData>(JSON.parse(JSON.stringify(companyState)));

function addStat() {
  form.stats.push({
    id: `stat-${Date.now()}`,
    value: 10,
    suffix: '+',
    label: { ar: 'مؤشر جديد', en: 'New Metric' }
  });
}

function removeStat(idx: number) {
  form.stats.splice(idx, 1);
}

async function handleSave() {
  await saveDataset('company', form);
}
</script>
