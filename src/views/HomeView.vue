<template>
  <div class="space-y-20 pb-20">

    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-20 bg-slate-50 border-b border-slate-200">

      <!-- Background subtle grid -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Text Content -->
        <div class="space-y-8 text-center lg:text-start order-2 lg:order-1">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles class="w-4 h-4 text-sky-500 animate-pulse" />
            <span>{{ t(siteCopyState.home.heroBadge) }}</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            {{ t(siteCopyState.home.heroTitle) }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {{ t(siteCopyState.home.heroSubtitle) }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <router-link
              to="/projects"
              class="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1 hover:shadow-sky-500/40 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              <span>{{ t(siteCopyState.buttons.viewProjects) }}</span>
              <ArrowRight v-if="!isRtl" class="w-5 h-5" />
              <ArrowLeft v-else class="w-5 h-5" />
            </router-link>

            <router-link
              to="/contact"
              class="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white border-2 border-slate-200 text-navy-900 hover:border-sky-500 hover:text-sky-600 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare class="w-5 h-5" />
              <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
            </router-link>
          </div>
        </div>

        <!-- Visual / 3D Element Placeholder (CSS Animated Shape) -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative h-80 sm:h-[450px]">
          <div class="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

          <div class="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] z-10 flex items-center justify-center">
            <!-- Simulated 3D object using CSS transforms -->
            <div class="w-48 h-48 sm:w-64 sm:h-64 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl flex items-center justify-center animate-[spin_20s_linear_infinite] [transform-style:preserve-3d]">
              <div class="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-inner [transform:translateZ(50px)]"></div>
            </div>
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(value, idx) in companyState.values"
          :key="idx"
          class="space-y-4 group"
        >
          <div class="flex items-center gap-3">
            <component :is="getIcon(value.icon)" class="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
              {{ t(value.title) }}
            </h3>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ t(value.description) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 rounded-[3rem] shadow-sm border border-slate-100">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sky-600 font-bold hover:bg-sky-50 hover:border-sky-200 transition-all text-sm shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.viewAllServices) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in servicesState.slice(0, 3)"
          :key="service.id"
          class="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6"
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

            <h3 class="text-xl font-bold text-navy-900">
              {{ t(service.title) }}
            </h3>
            <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {{ t(service.shortDescription) }}
            </p>
          </div>

          <router-link
            :to="`/services/${service.id}`"
            class="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors pt-4 border-t border-slate-200"
          >
            <span>{{ t(siteCopyState.buttons.details) }}</span>
            <ArrowRight v-if="!isRtl" class="w-4 h-4" />
            <ArrowLeft v-else class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
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
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 font-bold hover:bg-sky-50 hover:border-sky-200 transition-all text-sm shrink-0 shadow-sm"
        >
          <span>{{ t(siteCopyState.buttons.viewAllProjects) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projectsState.slice(0, 6)"
          :key="project.id"
          class="group"
        >
          <div class="relative h-56 rounded-2xl bg-slate-200 overflow-hidden mb-4 shadow-sm border border-slate-200">
            <img
              :src="project.coverImage"
              :alt="t(project.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div class="space-y-2 px-1">
            <div class="text-xs font-bold text-sky-600 uppercase tracking-wider">
              {{ t(project.type) }}
            </div>
            <h3 class="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
              <router-link :to="`/projects/${project.id}`">
                {{ t(project.title) }}
              </router-link>
            </h3>
            <p class="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {{ t(project.shortDescription) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl p-10 sm:p-16 bg-navy-900 text-center space-y-6 relative overflow-hidden shadow-xl">
        <div class="absolute w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] -top-40 -right-20"></div>

        <h2 class="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight relative z-10">
          {{ t(siteCopyState.home.ctaTitle) }}
        </h2>
        <p class="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto relative z-10">
          {{ t(siteCopyState.home.ctaSubtitle) }}
        </p>

        <div class="pt-4 relative z-10">
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1 transition-all"
          >
            <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
            <ArrowRight v-if="!isRtl" class="w-5 h-5" />
            <ArrowLeft v-else class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import {
  Sparkles,
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
