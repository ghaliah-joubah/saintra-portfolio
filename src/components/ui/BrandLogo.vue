<template>
  <img
    :src="currentLang === 'ar' ? '/brand/logo-ar.png' : '/brand/logo-en.png'"
    :alt="currentLang === 'ar' ? 'شعار ساينترا' : 'SAINTRA logo'"
    class="brand-logo"
    width="220"
    height="78"
    decoding="async"
  />
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';

const { currentLang } = useI18n();
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
