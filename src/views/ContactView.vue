<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto pt-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold shadow-sm">
        <MessageSquare class="w-4 h-4 text-sky-500" />
        <span>{{ t(siteCopyState.nav.contact) }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.contactPage.title) }}
      </h1>
      <p class="text-slate-600 text-base leading-relaxed font-medium">
        {{ t(siteCopyState.contactPage.subtitle) }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

      <!-- Direct Contact Info Column -->
      <div class="lg:col-span-5 space-y-6">
        <div class="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <h2 class="text-2xl font-bold text-navy-900 border-b border-slate-100 pb-4">
            {{ t(siteCopyState.contactPage.directContactTitle) }}
          </h2>

          <div class="space-y-4">
            <div v-if="companyState.contact.email" class="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-sky-200 transition-colors">
              <div class="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <Mail class="w-6 h-6" />
              </div>
              <div class="space-y-1">
                <div class="text-xs text-slate-500 font-bold uppercase">{{ t(siteCopyState.contactPage.emailLabel) }}</div>
                <a
                  :href="`mailto:${companyState.contact.email}`"
                  class="text-base font-bold text-navy-900 hover:text-sky-600 transition-colors block"
                >
                  {{ companyState.contact.email }}
                </a>
              </div>
            </div>

            <div v-if="companyState.contact.whatsapp" class="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-emerald-200 transition-colors">
              <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <PhoneCall class="w-6 h-6" />
              </div>
              <div class="space-y-1">
                <div class="text-xs text-slate-500 font-bold uppercase">WhatsApp</div>
                <a
                  :href="`https://wa.me/${companyState.contact.whatsapp.replace(/[^0-9]/g, '')}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-base font-bold text-navy-900 hover:text-emerald-600 transition-colors block dir-ltr"
                >
                  {{ companyState.contact.whatsapp }}
                </a>
              </div>
            </div>

            <div v-if="companyState.contact.address" class="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4 hover:border-indigo-200 transition-colors">
              <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                <MapPin class="w-6 h-6" />
              </div>
              <div class="space-y-1">
                <div class="text-xs text-slate-500 font-bold uppercase">{{ t(siteCopyState.contactPage.addressLabel) }}</div>
                <div class="text-sm font-bold text-navy-900 leading-relaxed">
                  {{ t(companyState.contact.address) }}
                </div>
              </div>
            </div>

            <div v-if="companyState.contact.workingHours" class="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-amber-200 transition-colors">
              <div class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Clock class="w-6 h-6" />
              </div>
              <div class="space-y-1">
                <div class="text-xs text-slate-500 font-bold uppercase">{{ t(siteCopyState.contactPage.workingHoursLabel) }}</div>
                <div class="text-sm font-bold text-navy-900">
                  {{ t(companyState.contact.workingHours) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Inquiry Form Column -->
      <div class="lg:col-span-7">
        <div class="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/50 space-y-8">
          <div class="space-y-2">
            <h2 class="text-2xl font-bold text-navy-900">
              {{ t(siteCopyState.contactPage.formTitle) }}
            </h2>
          </div>

          <form @submit.prevent="handleValidateLocally" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Name Input (Placeholder only) -->
              <div>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :aria-label="t(siteCopyState.contactPage.placeholders.name)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.name)"
                />
              </div>

              <!-- Email Input -->
              <div>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :aria-label="t(siteCopyState.contactPage.placeholders.email)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.email)"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Phone Input -->
              <div>
                <input
                  v-model="form.phone"
                  type="tel"
                  :aria-label="t(siteCopyState.contactPage.placeholders.phone)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.phone)"
                />
              </div>

              <!-- Service Selection -->
              <div>
                <select
                  v-model="form.serviceId"
                  :aria-label="t(siteCopyState.contactPage.placeholders.service)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors truncate"
                  :title="selectedServiceTitle"
                >
                  <option value="" disabled>{{ t(siteCopyState.contactPage.placeholders.service) }}</option>
                  <option v-for="srv in servicesState" :key="srv.id" :value="srv.id" :title="t(srv.title)">
                    {{ t(srv.title) }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Message Textarea (Locked Resize) -->
            <div>
              <textarea
                v-model="form.message"
                rows="5"
                required
                :aria-label="t(siteCopyState.contactPage.placeholders.message)"
                class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors resize-none overflow-y-auto"
                :placeholder="t(siteCopyState.contactPage.placeholders.message)"
              ></textarea>
            </div>

            <!-- Validation Feedback -->
            <div
              v-if="validationFeedback"
              class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold flex items-center gap-3"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{{ validationFeedback }}</span>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-4 rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2"
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
import { ref, computed } from 'vue';
import {
  MessageSquare,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
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

const selectedServiceTitle = computed(() => {
  if (!form.value.serviceId) return t(siteCopyState.contactPage.placeholders.service);
  const srv = servicesState.find(s => s.id === form.value.serviceId);
  return srv ? t(srv.title) : '';
});

function handleValidateLocally() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return;
  }
  validationFeedback.value = t(siteCopyState.contactPage.validationMsg);
}
</script>
