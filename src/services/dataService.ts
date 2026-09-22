import { reactive, ref } from 'vue';
import type { CompanyData, ServiceItem, ProjectItem, SiteCopy, AuthConfig } from '@/types/data';

import initialCompany from '@/data/company.json';
import initialServices from '@/data/services.json';
import initialProjects from '@/data/projects.json';
import initialSiteCopy from '@/data/siteCopy.json';
import initialAuth from '@/data/authConfig.json';

// Reactive state initialized from JSON or localStorage override
function loadInitial<T>(key: string, defaultVal: T): T {
  try {
    const saved = localStorage.getItem(`saintra_data_${key}`);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
  }
  return JSON.parse(JSON.stringify(defaultVal));
}

export const companyState = reactive<CompanyData>(loadInitial('company', initialCompany as CompanyData));
export const servicesState = reactive<ServiceItem[]>(loadInitial('services', initialServices as ServiceItem[]));
export const projectsState = reactive<ProjectItem[]>(loadInitial('projects', initialProjects as ProjectItem[]));
export const siteCopyState = reactive<SiteCopy>(loadInitial('siteCopy', initialSiteCopy as SiteCopy));
export const authState = reactive<AuthConfig>(loadInitial('authConfig', initialAuth as AuthConfig));

export const isSaving = ref(false);
export const saveStatusMsg = ref('');

export async function saveDataset(key: 'company' | 'services' | 'projects' | 'siteCopy' | 'authConfig', dataPayload: any): Promise<boolean> {
  isSaving.value = true;
  saveStatusMsg.value = 'جاري الحفظ... / Saving...';

  // 1. Update Reactive State
  if (key === 'company') Object.assign(companyState, dataPayload);
  if (key === 'services') {
    servicesState.length = 0;
    servicesState.push(...dataPayload);
  }
  if (key === 'projects') {
    projectsState.length = 0;
    projectsState.push(...dataPayload);
  }
  if (key === 'siteCopy') Object.assign(siteCopyState, dataPayload);
  if (key === 'authConfig') Object.assign(authState, dataPayload);

  // 2. Persist to LocalStorage for instant local reactivity
  localStorage.setItem(`saintra_data_${key}`, JSON.stringify(dataPayload));

  // 3. Send request to Local Vite CMS Plugin / VPS Express Endpoint
  try {
    const res = await fetch('/api/admin/save-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: `${key}.json`, data: dataPayload })
    });

    if (res.ok) {
      saveStatusMsg.value = 'تم الحفظ في الملفات النصية بنجاح! / Saved to files successfully!';
      setTimeout(() => { saveStatusMsg.value = ''; }, 3000);
      isSaving.value = false;
      return true;
    }
  } catch (err) {
    console.warn('Backend API endpoint not available, saved to LocalStorage cache.', err);
  }

  saveStatusMsg.value = 'تم الحفظ في التخزين المحلي! / Saved to Local Storage!';
  setTimeout(() => { saveStatusMsg.value = ''; }, 3000);
  isSaving.value = false;
  return true;
}

export function exportFullBackup() {
  const fullBackup = {
    company: companyState,
    services: servicesState,
    projects: projectsState,
    siteCopy: siteCopyState,
    authConfig: authState,
    exportDate: new Date().toISOString()
  };

  const jsonStr = JSON.stringify(fullBackup, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SAINTRA_Portfolio_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importFullBackup(jsonContent: string): boolean {
  try {
    const parsed = JSON.parse(jsonContent);
    if (parsed.company) saveDataset('company', parsed.company);
    if (parsed.services) saveDataset('services', parsed.services);
    if (parsed.projects) saveDataset('projects', parsed.projects);
    if (parsed.siteCopy) saveDataset('siteCopy', parsed.siteCopy);
    if (parsed.authConfig) saveDataset('authConfig', parsed.authConfig);
    return true;
  } catch (e) {
    console.error('Invalid JSON backup file', e);
    return false;
  }
}
