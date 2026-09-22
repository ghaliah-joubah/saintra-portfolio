<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-sky-500/30 text-sky-300 text-xs font-semibold">
        <MessageSquare class="w-4 h-4 text-sky-400" />
        <span>{{ t(siteCopyState.nav.contact) }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-white">
        {{ t(siteCopyState.contactPage.title) }}
      </h1>
      <p class="text-slate-300 text-base leading-relaxed">
        {{ t(siteCopyState.contactPage.subtitle) }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      <div class="lg:col-span-5 space-y-6">
        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 class="text-2xl font-bold text-white border-b border-slate-800 pb-4">
            {{ t(siteCopyState.contactPage.directContactTitle) }}
          </h2>

          <div class="space-y-4">
            <div v-if="companyState.contact.email" class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Mail class="w-6 h-6" />
              </div>
              <div class="space-y-0.5">
                <div class="text-xs text-slate-400 font-semibold">{{ t(siteCopyState.contactPage.emailLabel) }}</div>
                <a
                  :href="`mailto:${companyState.contact.email}`"
                  class="text-base font-bold text-white hover:text-sky-400 transition-colors block"
                >
                  {{ companyState.contact.email }}
                </a>
              </div>
            </div>

            <div v-if="companyState.contact.whatsapp" class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <PhoneCall class="w-6 h-6" />
              </div>
              <div class="space-y-0.5">
                <div class="text-xs text-slate-400 font-semibold">واتساب المباشر / WhatsApp</div>
                <a
                  :href="`https://wa.me/${companyState.contact.whatsapp.replace(/[^0-9]/g, '')}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  {{ companyState.contact.whatsapp }}
                </a>
              </div>
            </div>

            <div v-if="companyState.contact.address" class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                <MapPin class="w-6 h-6" />
              </div>
              <div class="space-y-0.5">
                <div class="text-xs text-slate-400 font-semibold">{{ t(siteCopyState.contactPage.addressLabel) }}</div>
                <div class="text-sm font-semibold text-slate-200 leading-relaxed">
                  {{ t(companyState.contact.address) }}
                </div>
              </div>
            </div>

            <div v-if="companyState.contact.workingHours" class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock class="w-6 h-6" />
              </div>
              <div class="space-y-0.5">
                <div class="text-xs text-slate-400 font-semibold">{{ t(siteCopyState.contactPage.workingHoursLabel) }}</div>
                <div class="text-sm font-semibold text-slate-200">
                  {{ t(companyState.contact.workingHours) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-bold text-white">
              {{ t(siteCopyState.contactPage.formTitle) }}
            </h2>

            <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed flex items-start gap-2.5">
              <AlertTriangle class="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <span>{{ t(siteCopyState.contactPage.demoNotice) }}</span>
            </div>
          </div>

          <form @submit.prevent="handleValidateLocally" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  {{ t(siteCopyState.contactPage.nameLabel) }} *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="محمد علي"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  {{ t(siteCopyState.contactPage.emailLabel) }} *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  {{ t(siteCopyState.contactPage.phoneLabel) }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="+966 50 000 0000"
                />
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-300">
                  {{ t(siteCopyState.contactPage.serviceLabel) }}
                </label>
                <select
                  v-model="form.serviceId"
                  class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                >
                  <option value="">اختر الخدمة / Select Service</option>
                  <option v-for="srv in servicesState" :key="srv.id" :value="srv.id">
                    {{ t(srv.title) }}
                  </option>
                </select>
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-slate-300">
                {{ t(siteCopyState.contactPage.messageLabel) }} *
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="اكتب تفاصيل استفسارك هنا..."
              ></textarea>
            </div>

            <div
              v-if="validationFeedback"
              class="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-semibold flex items-center gap-2.5"
            >
              <CheckCircle2 class="w-5 h-5 text-sky-400 shrink-0" />
              <span>{{ validationFeedback }}</span>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
            >
              <Send class="w-5 h-5" />
              <span>{{ t(siteCopyState.buttons.sendMessage) }}</span>
            </button>
          </form>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  MessageSquare,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  AlertTriangle,
  Send,
  CheckCircle2
} from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState, servicesState } from '@/services/dataService';

const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  phone: '',
  serviceId: '',
  message: ''
});

const validationFeedback = ref('');

function handleValidateLocally() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return;
  }
  validationFeedback.value = t(siteCopyState.contactPage.validationMsg);
}
</script>
