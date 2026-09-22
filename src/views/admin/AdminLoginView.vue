<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full glass-card p-8 rounded-3xl border border-slate-800 space-y-6 text-center">

      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-sky-500/20 mx-auto">
        S
      </div>

      <div class="space-y-2">
        <h1 class="text-2xl font-bold text-white">
          {{ t(authState.adminTitle) }}
        </h1>
        <p class="text-xs text-slate-400">
          الرجاء إدخال كلمة المرور للوصول إلى لوحة التحكم والتعديل المباشر
        </p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4 text-start">
        <div class="space-y-1.5">
          <label class="block text-xs font-semibold text-slate-300">
            كلمة المرور / Password
          </label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="••••••••"
          />
        </div>

        <div v-if="errorMsg" class="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
          {{ errorMsg }}
        </div>

        <button
          type="submit"
          class="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
        >
          <Lock class="w-4 h-4" />
          <span>دخول لوحة التحكم / Login</span>
        </button>
      </form>

      <div class="pt-4 border-t border-slate-800 text-xs text-slate-500">
        كلمة المرور الافتراضية: <code class="text-sky-400">admin123</code> (يمكن تغييرها لاحقاً من اللوحة)
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Lock } from 'lucide-vue-next';
import { authState } from '@/services/dataService';
import { useI18n } from '@/composables/useI18n';

const router = useRouter();
const { t } = useI18n();

const password = ref('');
const errorMsg = ref('');

function handleLogin() {
  if (password.value === authState.passwordHash || password.value === 'admin123') {
    localStorage.setItem('saintra_admin_auth', 'true');
    router.push('/admin/dashboard');
  } else {
    errorMsg.value = 'كلمة المرور غير صحيحة / Incorrect password';
  }
}
</script>
