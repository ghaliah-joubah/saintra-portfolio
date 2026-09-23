<template>
  <AdminLayout>
    <div class="space-y-8 max-w-6xl mx-auto">

      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-white">إدارة المشاريع والأعمال / Projects Management</h2>
          <p class="text-xs text-slate-400">إضافة وتعديل وحذف المشاريع، معارض الصور، والتقنيات المستخدمة</p>
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="openNewProject"
            class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 font-bold text-xs"
          >
            + إضافة مشروع جديد
          </button>

          <button
            @click="handleSave"
            class="px-6 py-2.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-600 text-white text-xs shadow-lg shadow-sky-500/20"
          >
            حفظ الكل / Save All Projects
          </button>
        </div>
      </div>

      <!-- Projects List -->
      <div class="space-y-4">
        <div
          v-for="(project, idx) in projectsList"
          :key="project.id"
          class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4"
        >
          <div class="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono text-xs font-bold">{{ project.id }}</span>
              <h3 class="text-base font-bold text-white">{{ project.title.ar }} / {{ project.title.en }}</h3>
            </div>

            <div class="flex items-center gap-2">
              <button @click="activeEditIdx = activeEditIdx === idx ? null : idx" class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-sky-400">
                {{ activeEditIdx === idx ? 'إغلاق التعديل' : 'تعديل التفاصيل' }}
              </button>
              <button @click="removeProject(idx)" class="px-3 py-1 rounded-lg bg-rose-500/10 text-xs text-rose-400 hover:bg-rose-500/20">
                حذف
              </button>
            </div>
          </div>

          <!-- Edit Form (when expanded) -->
          <div v-if="activeEditIdx === idx" class="space-y-6 pt-2">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">معرف المشروع (ID)</label>
                <input v-model="project.id" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">عنوان المشروع (عربي)</label>
                <input v-model="project.title.ar" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">Title (English)</label>
                <input v-model="project.title.en" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">التصنيف Type (عربي)</label>
                <input v-model="project.type.ar" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">Type (English)</label>
                <input v-model="project.type.en" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">سنة التنفيذ / Year</label>
                <input v-model="project.year" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">رابط الغلاف (Cover Image)</label>
                <input v-model="project.coverImage" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
              </div>
              <div>
                <label class="text-[11px] text-slate-400">رابط زيارة المشروع المباشر (Live URL)</label>
                <input v-model="project.liveUrl" class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" placeholder="https://..." />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-[11px] text-slate-400">التقنيات (مفصولة بفاصلة)</label>
                <input
                  :value="project.technologies.join(', ')"
                  @input="e => project.technologies = (e.target as HTMLInputElement).value.split(',').map(s => s.trim()).filter(Boolean)"
                  class="w-full p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  placeholder="Vue 3, Node.js, Docker..."
                />
              </div>

              <div>
                <label class="text-[11px] text-slate-400">الخدمات المرتبطة بالمشروع (Service IDs)</label>
                <div class="flex flex-wrap gap-2 pt-1">
                  <label v-for="srv in servicesState" :key="srv.id" class="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                    <input
                      type="checkbox"
                      :value="srv.id"
                      :checked="project.serviceIds.includes(srv.id)"
                      @change="e => toggleServiceId(project, srv.id, (e.target as HTMLInputElement).checked)"
                    />
                    <span>{{ srv.id }}</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Gallery Images List -->
            <div class="space-y-2 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-white">معرض صور المشروع / Gallery Images</span>
                <button @click="project.gallery.push('/images/project-fintech-pay-1.svg')" class="text-[11px] text-sky-400 font-semibold">+ إضافة صورة</button>
              </div>

              <div v-for="(img, imgIdx) in project.gallery" :key="imgIdx" class="flex items-center gap-2">
                <input v-model="project.gallery[imgIdx]" class="flex-1 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white" />
                <button @click="project.gallery.splice(imgIdx, 1)" class="text-rose-400 text-xs p-1">حذف</button>
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
import { projectsState, servicesState, saveDataset } from '@/services/dataService';
import type { ProjectItem } from '@/types/data';

const projectsList = reactive<ProjectItem[]>(JSON.parse(JSON.stringify(projectsState)));
const activeEditIdx = ref<number | null>(0);

function openNewProject() {
  const newProj: ProjectItem = {
    id: `project-${Date.now()}`,
    title: { ar: 'مشروع جديد', en: 'New Project' },
    type: { ar: 'تكنولوجيا', en: 'Tech' },
    shortDescription: { ar: 'وصف مختصر للمشروع', en: 'Short description' },
    fullDescription: { ar: 'تفاصيل كاملة عن المشروع', en: 'Full description' },
    coverImage: '/images/project-fintech-pay-1.svg',
    gallery: ['/images/project-fintech-pay-1.svg'],
    technologies: ['Vue 3', 'TypeScript'],
    platform: { ar: 'منصة ويب', en: 'Web Platform' },
    year: '2024',
    completionDate: { ar: '2024', en: '2024' },
    teamSize: { ar: '4 مهندسين', en: '4 Engineers' },
    serviceIds: ['web-development']
  };
  projectsList.unshift(newProj);
  activeEditIdx.value = 0;
}

function removeProject(idx: number) {
  if (confirm('هل أنت تأكد من حذف هذا المشروع؟')) {
    projectsList.splice(idx, 1);
    activeEditIdx.value = null;
  }
}

function toggleServiceId(proj: ProjectItem, serviceId: string, isChecked: boolean) {
  if (isChecked) {
    if (!proj.serviceIds.includes(serviceId)) proj.serviceIds.push(serviceId);
  } else {
    proj.serviceIds = proj.serviceIds.filter(id => id !== serviceId);
  }
}

async function handleSave() {
  await saveDataset('projects', projectsList);
}
</script>
