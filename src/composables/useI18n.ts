import { ref, computed, watch, onMounted } from 'vue';
import type { LocalizedString } from '@/data/company';

type Language = 'ar' | 'en';

const currentLang = ref<Language>('ar');

export function useI18n() {
  const isRtl = computed(() => currentLang.value === 'ar');

  function setLanguage(lang: Language) {
    currentLang.value = lang;
    localStorage.setItem('saintra_lang', lang);
    applyDocumentDir(lang);
  }

  function toggleLanguage() {
    setLanguage(currentLang.value === 'ar' ? 'en' : 'ar');
  }

  function applyDocumentDir(lang: Language) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }

  function t(localized: LocalizedString | undefined | null, fallback = ''): string {
    if (!localized) return fallback;
    return localized[currentLang.value] || localized.ar || localized.en || fallback;
  }

  onMounted(() => {
    const saved = localStorage.getItem('saintra_lang') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      currentLang.value = saved;
    }
    applyDocumentDir(currentLang.value);
  });

  return {
    currentLang,
    isRtl,
    setLanguage,
    toggleLanguage,
    t
  };
}
