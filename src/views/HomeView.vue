<template>
  <div class="space-y-20 pb-20">

    <!-- Hero Section -->
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-20 border-b border-slate-800/50">
      <div class="hero-glow bg-sky-500/20 w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="hero-glow bg-indigo-600/15 w-[400px] h-[400px] top-1/3 right-10"></div>

      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold shadow-lg shadow-sky-500/10">
          <Sparkles class="w-4 h-4 text-sky-400 animate-pulse" />
          <span>{{ t(siteCopyState.home.heroBadge) }}</span>
        </div>

        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mx-auto">
          {{ t(siteCopyState.home.heroTitle) }}
        </h1>

        <p class="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {{ t(siteCopyState.home.heroSubtitle) }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <router-link
            to="/projects"
            class="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>{{ t(siteCopyState.buttons.viewProjects) }}</span>
            <ArrowRight v-if="!isRtl" class="w-5 h-5" />
            <ArrowLeft v-else class="w-5 h-5" />
          </router-link>

          <router-link
            to="/contact"
            class="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold glass-card border border-slate-700 text-slate-100 hover:text-white hover:border-sky-500/50 hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare class="w-5 h-5 text-sky-400" />
            <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
          </router-link>
        </div>

        <div class="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-90">
          <div
            v-for="(tech, idx) in companyState.technologies.slice(0, 4)"
            :key="idx"
            class="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3 text-start hover:border-sky-500/40 transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold shrink-0">
              <Code2 class="w-5 h-5" />
            </div>
            <div>
              <div class="text-sm font-bold text-white">{{ tech.name }}</div>
              <div class="text-[11px] text-slate-400">{{ tech.category }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-3 mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
          {{ t(siteCopyState.home.whyChooseUsTitle) }}
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-base">
          {{ t(siteCopyState.home.whyChooseUsSubtitle) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(value, idx) in companyState.values"
          :key="idx"
          class="glass-card glass-card-hover p-6 rounded-2xl space-y-4 border border-slate-800/80 relative group"
        >
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
            <component :is="getIcon(value.icon)" class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
            {{ t(value.title) }}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed">
            {{ t(value.description) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div class="space-y-2">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            {{ t(siteCopyState.home.servicesTitle) }}
          </h2>
          <p class="text-slate-400 text-base">
            {{ t(siteCopyState.home.servicesSubtitle) }}
          </p>
        </div>

        <router-link
          to="/services"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 font-semibold hover:bg-slate-800 hover:border-sky-500/40 transition-all text-sm shrink-0"
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
          class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <component :is="getServiceIcon(service.icon)" class="w-6 h-6" />
            </div>
            <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-sky-300 border border-slate-700">
              {{ t(service.category) }}
            </div>
            <h3 class="text-xl font-bold text-white">
              {{ t(service.title) }}
            </h3>
            <p class="text-sm text-slate-300 line-clamp-3 leading-relaxed">
              {{ t(service.shortDescription) }}
            </p>
          </div>

          <router-link
            :to="`/services/${service.id}`"
            class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors pt-2 border-t border-slate-800"
          >
            <span>{{ t(siteCopyState.buttons.details) }}</span>
            <ArrowRight v-if="!isRtl" class="w-4 h-4" />
            <ArrowLeft v-else class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section (Up to 6) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div class="space-y-2">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            {{ t(siteCopyState.home.projectsTitle) }}
          </h2>
          <p class="text-slate-400 text-base">
            {{ t(siteCopyState.home.projectsSubtitle) }}
          </p>
        </div>

        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 font-semibold hover:bg-slate-800 hover:border-sky-500/40 transition-all text-sm shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.viewAllProjects) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projectsState.slice(0, 6)"
          :key="project.id"
          class="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col"
        >
          <div class="relative h-48 bg-slate-900 overflow-hidden group">
            <img
              :src="project.coverImage"
              :alt="t(project.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
            <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-slate-700 text-sky-300 backdrop-blur-md">
              {{ t(project.type) }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white hover:text-sky-400 transition-colors">
                <router-link :to="`/projects/${project.id}`">
                  {{ t(project.title) }}
                </router-link>
              </h3>
              <p class="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {{ t(project.shortDescription) }}
              </p>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {{ tech }}
              </span>
            </div>

            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors pt-3 border-t border-slate-800/80"
            >
              <span>{{ t(siteCopyState.buttons.details) }}</span>
              <ArrowRight v-if="!isRtl" class="w-4 h-4" />
              <ArrowLeft v-else class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-3xl p-8 sm:p-12 border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 text-center space-y-6 relative overflow-hidden">
        <div class="hero-glow bg-sky-500/20 w-80 h-80 -top-20 -right-20"></div>

        <h2 class="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          {{ t(siteCopyState.home.ctaTitle) }}
        </h2>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          {{ t(siteCopyState.home.ctaSubtitle) }}
        </p>

        <div class="pt-2">
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl shadow-sky-500/30 hover:scale-105 transition-all"
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
  Code2,
  Zap,
  Code,
  Users,
  Clock,
  Globe,
  Smartphone,
  Database,
  Layout,
  Cloud,
  Cpu
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
