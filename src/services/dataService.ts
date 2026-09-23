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
    if (saved) {
      const parsed = JSON.parse(saved);
      if (key === 'siteCopy') return mergeMissingCopy(defaultVal, parsed);
      if (key === 'projects' || key === 'services') return migrateLegacyMedia(parsed, defaultVal);
      return parsed;
    }
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
  }
  return JSON.parse(JSON.stringify(defaultVal));
}

function migrateLegacyMedia<T>(saved: T, defaults: T): T {
  if (!Array.isArray(saved) || !Array.isArray(defaults)) return saved;
  const current = new Map(defaults.map((item) => [item.id, item]));
  const isLegacyImage = (value: unknown) => typeof value === 'string' && /^\/images\/photo_2026-09-22_/.test(value);
  return saved.map((item) => {
    const replacement = current.get(item.id);
    if (!replacement) return item;
    const updated = { ...item };
    if (isLegacyImage(updated.coverImage)) updated.coverImage = replacement.coverImage;
    if (isLegacyImage(updated.image)) updated.image = replacement.image;
    if (updated.videoUrl === 'https://www.youtube.com/embed/dQw4w9WgXcQ') updated.videoUrl = replacement.videoUrl;
    if (Array.isArray(updated.gallery) && updated.gallery.length) {
      const usesOldPreviewSet = updated.gallery.length < replacement.gallery.length
        && updated.gallery.every((image: string, index: number) => image === `/images/project-${item.id}-${index + 1}.svg`);
      if (updated.gallery.every(isLegacyImage) || usesOldPreviewSet) updated.gallery = replacement.gallery;
    }
    return updated;
  }) as T;
}

function mergeMissingCopy<T>(defaults: T, saved: unknown): T {
  if (!defaults || typeof defaults !== 'object' || Array.isArray(defaults) || !saved || typeof saved !== 'object' || Array.isArray(saved)) {
    return (saved ?? defaults) as T;
  }
  const merged: Record<string, unknown> = { ...(defaults as Record<string, unknown>) };
  for (const [key, value] of Object.entries(saved)) {
    if (key in merged) merged[key] = mergeMissingCopy(merged[key], value);
  }
  return merged as T;
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
