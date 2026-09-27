<template>
  <LegalDocument :document="siteCopyState.legal.terms" />
</template>

<script setup lang="ts">
import LegalDocument from '@/components/ui/LegalDocument.vue';
import { siteCopyState } from '@/services/dataService';
</script>
