<template>
  <div class="space-y-20 pb-20">

    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-20 bg-gradient-to-br from-white via-sky-50 to-[#dceffc]">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e122_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e122_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_65%_at_70%_50%,#000_45%,transparent_100%)] pointer-events-none"></div>
      <HeroNetwork class="hero-visual" aria-hidden="true" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div class="space-y-8 text-center lg:text-start max-w-2xl mx-auto lg:mx-0">
          <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            {{ t(siteCopyState.home.heroTitle) }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {{ t(siteCopyState.home.heroSubtitle) }}
          </p>

          <div class="hero-actions pt-4">
            <router-link
              to="/projects"
              class="hero-action rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1 hover:shadow-sky-500/40 active:translate-y-0 transition-transform"
            >
              <span>{{ t(siteCopyState.buttons.viewProjects) }}</span>
              <ArrowRight v-if="!isRtl" class="w-5 h-5" />
              <ArrowLeft v-else class="w-5 h-5" />
            </router-link>

            <router-link
              to="/contact"
              class="hero-action rounded-xl font-bold bg-white border-2 border-slate-200 text-navy-900 hover:border-sky-500 hover:text-sky-600 shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all"
            >
              <MessageSquare class="w-5 h-5" />
              <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-3 mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-900">
          {{ t(siteCopyState.home.whyChooseUsTitle) }}
        </h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-base">
          {{ t(siteCopyState.home.whyChooseUsSubtitle) }}
        </p>
      </div>

      <div class="why-grid">
        <div
          v-for="(value, idx) in companyState.values"
          :key="idx"
          class="h-full rounded-2xl border border-slate-200 bg-white p-5 lg:p-6 shadow-sm transition-all hover:border-sky-300 hover:shadow-lg space-y-3 group"
        >
          <div class="flex items-center gap-3">
            <component :is="getIcon(value.icon)" class="w-7 h-7 text-sky-500 group-hover:scale-110 transition-transform shrink-0" />
            <h3 class="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
              {{ t(value.title) }}
            </h3>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed font-medium pl-10 rtl:pr-10 rtl:pl-0">
            {{ t(value.description) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="services-preview-heading mb-10">
        <div class="space-y-2">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-900">
            {{ t(siteCopyState.home.servicesTitle) }}
          </h2>
          <p class="text-slate-500 text-base">
            {{ t(siteCopyState.home.servicesSubtitle) }}
          </p>
        </div>

        <router-link
          to="/services"
          class="inline-flex self-start items-center gap-2 px-5 py-2.5 min-h-[44px] w-fit whitespace-nowrap rounded-xl bg-white border border-slate-200 text-sky-600 font-bold hover:bg-sky-50 hover:border-sky-200 shadow-sm hover:shadow transition-all text-sm shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.viewAllServices) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>

      <div class="service-preview-grid">
        <router-link
          v-for="service in servicesState.slice(0, 4)"
          :key="service.id"
          :to="`/services/${service.id}`"
          class="standard-card p-6 flex flex-col justify-between space-y-6 group"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                <component :is="getServiceIcon(service.icon)" class="w-5 h-5" />
              </div>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {{ t(service.category) }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
              {{ t(service.title) }}
            </h3>
            <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {{ t(service.shortDescription) }}
            </p>
          </div>

          <div class="inline-flex items-center gap-2 text-sm font-bold text-sky-600 group-hover:text-sky-700 transition-colors pt-4 border-t border-slate-100">
            <span>{{ t(siteCopyState.buttons.details) }}</span>
            <ArrowRight v-if="!isRtl" class="w-4 h-4" />
            <ArrowLeft v-else class="w-4 h-4" />
          </div>
        </router-link>
      </div>
    </section>

    <!-- Projects Preview Section (Up to 6) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div class="space-y-2">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-900">
            {{ t(siteCopyState.home.projectsTitle) }}
          </h2>
          <p class="text-slate-500 text-base">
            {{ t(siteCopyState.home.projectsSubtitle) }}
          </p>
        </div>

        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 font-bold hover:bg-sky-50 hover:border-sky-200 shadow-sm hover:shadow transition-all text-sm shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.viewAllProjects) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>

      <div class="project-card-grid home-project-grid">
        <ProjectCard v-for="project in projectsState.slice(0, 6)" :key="project.id" :project="project" />
      </div>
    </section>

    <!-- Call to Action Banner -->
    <ContactCta />

  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Zap,
  Code,
  Users,
  Clock,
  Globe,
  Smartphone,
  Database,
  Layout,
  Cloud,
  Cpu,
  Code2
} from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState, servicesState, projectsState } from '@/services/dataService';
import ProjectCard from '@/components/ui/ProjectCard.vue';
import HeroNetwork from '@/components/ui/HeroNetwork.vue';
import ContactCta from '@/components/ui/ContactCta.vue';

const { isRtl, t } = useI18n();

function getIcon(name: string) {
  switch (name) {
    case 'Zap': return Zap;
    case 'Code': return Code;
    case 'Users': return Users;
    case 'Clock': return Clock;
    default: return Code2;
  }
}

function getServiceIcon(name: string) {
  switch (name) {
    case 'Globe': return Globe;
    case 'Smartphone': return Smartphone;
    case 'Database': return Database;
    case 'Layout': return Layout;
    case 'Cloud': return Cloud;
    case 'Cpu': return Cpu;
    default: return Code2;
  }
}
</script>
