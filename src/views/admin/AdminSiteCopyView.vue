<template>
  <AdminLayout>
    <div class="space-y-8 max-w-5xl mx-auto">

      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-white">إدارة النصوص والترجمات / Site Copy & Labels</h2>
          <p class="text-xs text-slate-400">تعديل نصوص القوائم، الأزرار، العناوين والتذييل باللغتين العربية والإنجليزية</p>
        </div>

        <button
          @click="handleSave"
          class="px-6 py-2.5 rounded-xl font-bold bg-sky-500 hover:bg-sky-600 text-white text-xs shadow-lg shadow-sky-500/20"
        >
          حفظ النصوص / Save Site Copy
        </button>
      </div>

      <!-- Nav Labels -->
      <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">قائمة التنقل العلوي / Navigation Links</h3>

        <div v-for="(val, key) in form.nav" :key="key" class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (عربي)</label>
            <input v-model="val.ar" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (English)</label>
            <input v-model="val.en" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
        </div>
      </div>

      <!-- Button Labels -->
      <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">نصوص الأزرار / Buttons Labels</h3>

        <div v-for="(val, key) in form.buttons" :key="key" class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (عربي)</label>
            <input v-model="val.ar" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (English)</label>
            <input v-model="val.en" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
        </div>
      </div>

      <!-- Home Headings -->
      <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">عناوين الصفحة الرئيسية / Home Section Headings</h3>

        <div v-for="(val, key) in form.home" :key="key" class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (عربي)</label>
            <textarea v-model="val.ar" rows="2" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"></textarea>
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (English)</label>
            <textarea v-model="val.en" rows="2" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"></textarea>
          </div>
        </div>
      </div>

      <!-- Contact Page Labels -->
      <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3">نصوص التواصل / Contact Section Headings</h3>

        <div v-for="(val, key) in form.contactPage.placeholders" :key="key" class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">Placeholder {{ key }} (عربي)</label>
            <textarea v-model="val.ar" rows="1" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"></textarea>
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">Placeholder {{ key }} (English)</label>
            <textarea v-model="val.en" rows="1" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"></textarea>
          </div>
        </div>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import { siteCopyState, saveDataset } from '@/services/dataService';
import type { SiteCopy } from '@/types/data';

const form = reactive<SiteCopy>(JSON.parse(JSON.stringify(siteCopyState)));

async function handleSave() {
  await saveDataset('siteCopy', form);
}
</script>
