<template>
  <img
    :src="logoSource"
    :alt="currentLang === 'ar' ? 'شعار ساينترا' : 'SAINTRA logo'"
    class="brand-logo"
    width="220"
    height="78"
    decoding="async"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/composables/useI18n';
import { useTheme } from '@/composables/useTheme';
import darkFooterLogo from '../../../docs/Full Brand/Logo dark/logo 1 - white-01.svg';
import darkArabicLogo from '../../../docs/Full Brand/Logo dark/logo 2 - white-01-01.svg';
import darkEnglishLogo from '../../../docs/Full Brand/Logo dark/logo 3 - white-01.svg';

const props = withDefaults(defineProps<{ placement?: 'default' | 'navbar' | 'footer' }>(), { placement: 'default' });
const { currentLang } = useI18n();
const { isDark } = useTheme();

const logoSource = computed(() => {
  if (props.placement === 'footer') return darkFooterLogo;
  if (!isDark.value || props.placement === 'default') {
    return currentLang.value === 'ar' ? '/brand/logo-ar.png' : '/brand/logo-en.png';
  }
  return currentLang.value === 'ar' ? darkArabicLogo : darkEnglishLogo;
});
</script>

<style scoped>
.brand-logo {
  display: block;
  width: 220px;
  height: 78px;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  flex: none;
}

@media (max-width: 480px) {
  .brand-logo { width: 155px; height: 55px; }
}
</style>
