<template>
  <AdminLayout>
    <div class="space-y-8 max-w-5xl mx-auto">

      <div>
        <h2 class="text-2xl font-bold text-white">إدارة الوسائط والصور / Media Assets Manager</h2>
        <p class="text-xs text-slate-400">استعراض الصور المتاحة ونخ مساراتها لاستخدامها في الخدمات والمشاريع</p>
      </div>

      <!-- Images Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(img, idx) in availableImages"
          :key="idx"
          class="glass-card p-4 rounded-2xl border border-slate-800 space-y-3"
        >
          <div class="rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-800">
            <img :src="img" alt="Media asset" class="w-full h-full object-cover" />
          </div>

          <div class="space-y-2">
            <div class="text-xs font-mono text-slate-300 truncate dir-ltr">{{ img }}</div>
            <button
              @click="copyPath(img)"
              class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold border border-slate-700 transition-colors"
            >
              {{ copiedPath === img ? 'تم نسخ المسار! / Copied!' : 'نسخ مسار الصورة' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Instructions Box -->
      <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-2 text-xs text-slate-300">
        <h3 class="font-bold text-sm text-white">💡 كيفية إضافة صور جديدة:</h3>
        <p>
          لإضافة صور جديدة إلى المشروع، قم بوضع ملفات الصور في مجلد <code class="text-sky-400">public/images/</code> على جهازك.
          ستصبح الصورة متاحة فوراً للاستخدام عبر المسار: <code class="text-sky-400">/images/اسم_الصورة.jpg</code>.
        </p>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';

const availableImages = [
  '/images/photo_2026-09-22_14-40-58.jpg',
  '/images/photo_2026-09-22_14-41-07.jpg',
  '/images/photo_2026-09-22_14-41-15.jpg',
  '/images/photo_2026-09-22_14-41-21.jpg',
  '/images/photo_2026-09-22_14-41-27.jpg'
];

const copiedPath = ref('');

function copyPath(path: string) {
  navigator.clipboard.writeText(path);
  copiedPath.value = path;
  setTimeout(() => { copiedPath.value = ''; }, 2000);
}
</script>
