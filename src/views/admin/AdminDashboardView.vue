<template>
  <AdminLayout>
    <div class="space-y-8 max-w-7xl mx-auto">

      <!-- Welcome Header -->
      <div class="glass-card p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-sky-950/30 via-slate-900 to-indigo-950/30">
        <h2 class="text-2xl font-extrabold text-white">مرحباً بك في لوحة الإدارة والتعديل المباشر</h2>
        <p class="text-slate-300 text-sm mt-1">
          يمكنك تعديل كافة بيانات الشركة، الخدمات، المشاريع والنصوص وسيتم حفظها أوتوماتيكياً في ملفات البيانات المحلية.
        </p>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div class="text-xs font-semibold text-slate-400">إجمالي الخدمات / Services</div>
          <div class="text-3xl font-extrabold text-sky-400">{{ servicesState.length }}</div>
          <router-link to="/admin/services" class="text-xs text-slate-400 hover:text-white underline block pt-1">
            إدارة الخدمات &larr;
          </router-link>
        </div>

        <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div class="text-xs font-semibold text-slate-400">إجمالي المشاريع / Projects</div>
          <div class="text-3xl font-extrabold text-indigo-400">{{ projectsState.length }}</div>
          <router-link to="/admin/projects" class="text-xs text-slate-400 hover:text-white underline block pt-1">
            إدارة المشاريع &larr;
          </router-link>
        </div>

        <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div class="text-xs font-semibold text-slate-400">مؤشرات الإحصائيات / Stats</div>
          <div class="text-3xl font-extrabold text-emerald-400">{{ companyState.stats.length }}</div>
          <router-link to="/admin/company" class="text-xs text-slate-400 hover:text-white underline block pt-1">
            إدارة بيانات الشركة &larr;
          </router-link>
        </div>

        <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div class="text-xs font-semibold text-slate-400">فروع الشركة / Branches</div>
          <div class="text-3xl font-extrabold text-amber-400">{{ companyState.branches.length }}</div>
          <router-link to="/admin/company" class="text-xs text-slate-400 hover:text-white underline block pt-1">
            عرض الفروع &larr;
          </router-link>
        </div>

      </div>

      <!-- Quick Action Modules -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <router-link to="/admin/company" class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 block">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
            <Building2 class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">بيانات الشركة والإحصائيات</h3>
          <p class="text-xs text-slate-400 leading-relaxed">تعديل القصة، الرؤية، الرسالة، القيم، الإحصائيات، وساعات العمل وقنوات التواصل.</p>
        </router-link>

        <router-link to="/admin/services" class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 block">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
            <Layers class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">إدارة الخدمات المتقدمة</h3>
          <p class="text-xs text-slate-400 leading-relaxed">إضافة وتعديل الخدمات، عناصر ما تتضمنه الخدمة، وخطوات التنفيذ وفيديوهات الشرح.</p>
        </router-link>

        <router-link to="/admin/projects" class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 block">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
            <FolderGit2 class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">إدارة معرض الأعمال والمشاريع</h3>
          <p class="text-xs text-slate-400 leading-relaxed">إضافة مشاريع جديدة، معارض الصور، التقنيات المستخدمة، وربطها بالخدمات.</p>
        </router-link>

        <router-link to="/admin/site-copy" class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 block">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
            <FileText class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">إدارة النصوص والترجمات</h3>
          <p class="text-xs text-slate-400 leading-relaxed">تعديل نصوص القوائم العلوي، الفوتر، الأزرار والعناوين باللغتين العربية والإنجليزية.</p>
        </router-link>

        <router-link to="/admin/media" class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3 block">
          <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
            <Image class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">إدارة الصور والوسائط</h3>
          <p class="text-xs text-slate-400 leading-relaxed">استعراض أصول الصور ونسخ مساراتها لاستخدامها في المشاريع والخدمات.</p>
        </router-link>

      </div>

    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { Building2, Layers, FolderGit2, FileText, Image } from 'lucide-vue-next';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import { companyState, servicesState, projectsState } from '@/services/dataService';
</script>
