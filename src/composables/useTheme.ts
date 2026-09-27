import { computed, ref } from 'vue';

export type PortfolioTheme = 'light' | 'dark';

const STORAGE_KEY = 'saintra_theme';
const currentTheme = ref<PortfolioTheme>('light');
let initialized = false;

function readSavedTheme(): PortfolioTheme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function useTheme() {
  const isDark = computed(() => currentTheme.value === 'dark');

  function initializeTheme() {
    if (initialized) return;
    currentTheme.value = readSavedTheme();
    initialized = true;
  }

  function setTheme(theme: PortfolioTheme) {
    currentTheme.value = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // The selected theme remains active for this session when storage is unavailable.
    }
  }

  function toggleTheme() {
    setTheme(currentTheme.value === 'light' ? 'dark' : 'light');
  }

  return {
    currentTheme,
    isDark,
    initializeTheme,
    setTheme,
    toggleTheme
  };
}
