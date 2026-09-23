import { ref, computed, onMounted } from 'vue';
import type { LocalizedString } from '@/types/data';

type Language = 'ar' | 'en';

const currentLang = ref<Language>('en');

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
    document.title = lang === 'ar' ? 'سينترا | سيقما تكنولوجي لتقنية المعلومات' : 'SAINTRA | Sigma Technology for IT';
  }

  function t(localized: LocalizedString | undefined | null, fallback = ''): string {
    if (!localized) return fallback;
    return localized[currentLang.value] || fallback;
  }

  onMounted(() => {
    const saved = localStorage.getItem('saintra_lang') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      currentLang.value = saved;
    } else {
      currentLang.value = 'en';
      localStorage.setItem('saintra_lang', 'en');
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
