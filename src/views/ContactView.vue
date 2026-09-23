<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto pt-10">
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
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.1 1.4 3.3c.2.2 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.6.8.1 1.5.1 2.1 0 .6-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"/></svg>
              </div>
              <div class="space-y-1">
                <div class="text-xs text-slate-500 font-bold uppercase">{{ t(siteCopyState.contactPage.whatsappLabel) }}</div>
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
              <!-- Name Input -->
              <div>
                <label for="contact-name" class="mb-2 block text-sm font-semibold text-navy-900">{{ t(siteCopyState.contactPage.labels.name) }}</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  required
                  :aria-label="t(siteCopyState.contactPage.placeholders.name)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium hover:border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.name)"
                />
              </div>

              <!-- Email Input -->
              <div>
                <label for="contact-email" class="mb-2 block text-sm font-semibold text-navy-900">{{ t(siteCopyState.contactPage.labels.email) }}</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  required
                  :aria-label="t(siteCopyState.contactPage.placeholders.email)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium hover:border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.email)"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Phone Input -->
              <div>
                <label for="contact-phone" class="mb-2 block text-sm font-semibold text-navy-900">{{ t(siteCopyState.contactPage.labels.phone) }}</label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  type="tel"
                  :aria-label="t(siteCopyState.contactPage.placeholders.phone)"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium hover:border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors"
                  :placeholder="t(siteCopyState.contactPage.placeholders.phone)"
                />
              </div>

              <!-- Service Selection -->
              <div>
                <label for="contact-service" class="mb-2 block text-sm font-semibold text-navy-900">{{ t(siteCopyState.contactPage.labels.service) }}</label>
                <div class="relative">
                <select
                  id="contact-service"
                  v-model="form.serviceId"
                  :class="form.serviceId ? 'text-navy-900' : 'text-slate-400'"
                  class="w-full appearance-none ps-5 pe-12 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white hover:border-sky-300 transition-colors truncate"
                  :title="selectedServiceTitle"
                >
                  <option value="" disabled>{{ t(siteCopyState.contactPage.placeholders.service) }}</option>
                  <option v-for="srv in servicesState" :key="srv.id" :value="srv.id" :title="t(srv.title)">
                    {{ t(srv.title) }}
                  </option>
                </select>
                <ChevronDown class="pointer-events-none absolute end-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                </div>
              </div>
            </div>

            <!-- Message Textarea (Locked Resize) -->
            <div>
              <label for="contact-message" class="mb-2 block text-sm font-semibold text-navy-900">{{ t(siteCopyState.contactPage.labels.message) }}</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="5"
                required
                :aria-label="t(siteCopyState.contactPage.placeholders.message)"
                class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 text-sm font-medium hover:border-sky-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-white transition-colors resize-none overflow-y-auto"
                :placeholder="t(siteCopyState.contactPage.placeholders.message)"
              ></textarea>
            </div>

            <!-- Validation Feedback -->
            <div
              v-if="isValidated"
              class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold flex items-center gap-3"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{{ t(siteCopyState.contactPage.validationMsg) }}</span>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full sm:w-auto sm:min-w-44 px-8 py-4 rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-transform inline-flex items-center justify-center gap-2"
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
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown
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

const isValidated = ref(false);

const selectedServiceTitle = computed(() => {
  if (!form.value.serviceId) return t(siteCopyState.contactPage.placeholders.service);
  const srv = servicesState.find(s => s.id === form.value.serviceId);
  return srv ? t(srv.title) : '';
});

function handleValidateLocally() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return;
  }
  isValidated.value = true;
}
</script>
