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

        <div v-for="(val, key) in form.contactPage.labels" :key="`label-${key}`" class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (عربي)</label>
            <input v-model="val.ar" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
          <div>
            <label class="text-[10px] text-slate-400 block">{{ key }} (English)</label>
            <input v-model="val.en" class="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white" />
          </div>
        </div>

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

      <!-- Legal Documents -->
      <div class="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6">
        <div class="flex flex-col gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-bold text-white">المستندات القانونية / Legal Documents</h3>
            <p class="text-xs text-slate-400">تعديل المحتوى الحالي لسياسة الخصوصية والشروط والأحكام باللغتين</p>
          </div>
          <button
            type="button"
            @click="handleSave"
            class="self-start rounded-xl bg-sky-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600 sm:self-auto"
          >
            حفظ المحتوى القانوني / Save Legal Content
          </button>
        </div>

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2" role="tablist" aria-label="Legal document editor">
          <button
            v-for="tab in legalTabs"
            :id="`legal-tab-${tab.key}`"
            :key="tab.key"
            type="button"
            role="tab"
            :aria-selected="activeLegalTab === tab.key"
            :aria-controls="`legal-panel-${tab.key}`"
            class="min-h-11 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            :class="activeLegalTab === tab.key ? 'border-sky-500/50 bg-sky-500/20 text-sky-300' : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-600 hover:text-white'"
            @click="activeLegalTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>

        <section
          :id="`legal-panel-${activeLegalTab}`"
          role="tabpanel"
          :aria-labelledby="`legal-tab-${activeLegalTab}`"
          class="space-y-6"
        >
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">العنوان (عربي)</label>
              <input v-model="activeLegalDocument.title.ar" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
            </div>
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">Title (English)</label>
              <input v-model="activeLegalDocument.title.en" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
            </div>
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">المقدمة (عربي)</label>
              <textarea v-model="activeLegalDocument.introduction.ar" rows="4" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-white"></textarea>
            </div>
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">Introduction (English)</label>
              <textarea v-model="activeLegalDocument.introduction.en" rows="4" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-white"></textarea>
            </div>
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">آخر تحديث (عربي)</label>
              <input v-model="activeLegalDocument.lastUpdated.ar" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
            </div>
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">Last updated (English)</label>
              <input v-model="activeLegalDocument.lastUpdated.en" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
            </div>
          </div>

          <div class="space-y-5">
            <article
              v-for="(section, sectionIndex) in activeLegalDocument.sections"
              :key="section.id"
              class="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5"
            >
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="font-bold text-white">القسم {{ sectionIndex + 1 }} / Section {{ sectionIndex + 1 }}</h4>
                <span class="rounded-lg bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-400">{{ section.id }}</span>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">عنوان القسم (عربي)</label>
                  <input v-model="section.title.ar" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
                </div>
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">Section title (English)</label>
                  <input v-model="section.title.en" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-white" />
                </div>
              </div>

              <div v-for="(paragraph, paragraphIndex) in section.paragraphs" :key="paragraphIndex" class="grid grid-cols-1 gap-4 border-t border-slate-800 pt-4 md:grid-cols-2">
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">الفقرة {{ paragraphIndex + 1 }} (عربي)</label>
                  <textarea v-model="paragraph.ar" rows="5" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-white"></textarea>
                </div>
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-300">Paragraph {{ paragraphIndex + 1 }} (English)</label>
                  <textarea v-model="paragraph.en" rows="5" class="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm leading-relaxed text-white"></textarea>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import { siteCopyState, saveDataset } from '@/services/dataService';
import type { SiteCopy } from '@/types/data';

const form = reactive<SiteCopy>(JSON.parse(JSON.stringify(siteCopyState)));
type LegalDocumentKey = 'privacyPolicy' | 'terms';
const activeLegalTab = ref<LegalDocumentKey>('privacyPolicy');
const legalTabs: { key: LegalDocumentKey; label: string }[] = [
  { key: 'privacyPolicy', label: 'سياسة الخصوصية / Privacy Policy' },
  { key: 'terms', label: 'الشروط والأحكام / Terms & Conditions' }
];
const activeLegalDocument = computed(() => form.legal[activeLegalTab.value]);

async function handleSave() {
  await saveDataset('siteCopy', form);
}
</script>
