<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">

    <!-- Admin Sidebar -->
    <aside class="w-full md:w-64 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 p-4 flex flex-col justify-between shrink-0">
      <div class="space-y-6">

        <!-- Header / Brand -->
        <div class="space-y-2 px-2 pt-2">
          <div class="inline-flex rounded-xl bg-white px-2 shadow-sm"><BrandLogo style="width: 184px; height: 65px" /></div>
          <div class="text-xs font-semibold text-sky-400">لوحة الإدارة / Admin CMS</div>
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-1.5 pt-4">
          <router-link
            v-for="item in adminNav"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors"
            :class="$route.path === item.path ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'"
          >
            <component :is="item.icon" class="w-4 h-4 shrink-0" />
            <span>{{ item.label }}</span>
          </router-link>
        </nav>

      </div>

      <!-- Quick Actions / Public Site Link -->
      <div class="pt-6 border-t border-slate-800 space-y-2">
        <router-link
          to="/"
          target="_blank"
          class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/60 transition-colors"
        >
          <ExternalLink class="w-3.5 h-3.5 text-sky-400" />
          <span>الموقع العام / Public Site</span>
        </router-link>

        <button
          @click="logout"
          class="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-brand-coral hover:bg-brand-coral/10 text-xs font-semibold transition-colors"
        >
          <LogOut class="w-3.5 h-3.5" />
          <span>تسجيل الخروج / Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0">

      <!-- Top Status & Action Bar -->
      <header class="bg-slate-900/60 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div class="flex items-center gap-3">
          <h1 class="text-lg font-bold text-white">
            {{ currentTitle }}
          </h1>
          <span v-if="saveStatusMsg" class="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-semibold animate-pulse">
            {{ saveStatusMsg }}
          </span>
        </div>

        <!-- Backup Export / Import Tools -->
        <div class="flex items-center gap-2">
          <button
            @click="exportFullBackup"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-sky-400 transition-colors"
            title="تصدير نسخة احتياطية من كل البيانات"
          >
            <Download class="w-3.5 h-3.5 text-sky-400" />
            <span>تصدير Backup</span>
          </button>

          <label
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-sky-400 transition-colors cursor-pointer"
            title="استعادة بيانات من ملف JSON"
          >
            <Upload class="w-3.5 h-3.5 text-sky-400" />
            <span>استعادة Backup</span>
            <input type="file" accept=".json" class="hidden" @change="handleImportBackup" />
          </label>
        </div>

      </header>

      <!-- Page View Slot -->
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
  LayoutDashboard,
  Building2,
  Layers,
  FolderGit2,
  FileText,
  Image,
  ExternalLink,
  LogOut,
  Download,
  Upload
} from 'lucide-vue-next';

import { saveStatusMsg, exportFullBackup, importFullBackup } from '@/services/dataService';
import BrandLogo from '@/components/ui/BrandLogo.vue';

const router = useRouter();
const route = useRoute();

const adminNav = [
  { path: '/admin/dashboard', label: 'لوحة النظرة العامة', icon: LayoutDashboard },
  { path: '/admin/company', label: 'بيانات الشركة والإحصائيات', icon: Building2 },
  { path: '/admin/services', label: 'إدارة الخدمات', icon: Layers },
  { path: '/admin/projects', label: 'إدارة المشاريع', icon: FolderGit2 },
  { path: '/admin/site-copy', label: 'النصوص والترجمات', icon: FileText },
  { path: '/admin/media', label: 'إدارة الصور والوسائط', icon: Image }
];

const currentTitle = computed(() => {
  const item = adminNav.find((n) => n.path === route.path);
  return item ? item.label : 'لوحة التحكم الإدارية';
});

function logout() {
  localStorage.removeItem('saintra_admin_auth');
  router.push('/admin/login');
}

function handleImportBackup(e: Event) {
  const target = e.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;
  const file = target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target?.result as string;
    if (content) {
      const ok = importFullBackup(content);
      if (ok) {
        alert('تمت استعادة البيانات بنجاح! / Backup imported successfully!');
        window.location.reload();
      } else {
        alert('حدث خطأ في تنسيق الملف المستورد.');
      }
    }
  };
  reader.readAsText(file);
}
</script>
