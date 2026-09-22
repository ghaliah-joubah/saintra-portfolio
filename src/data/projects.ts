import projectsJson from './projects.json';
import type { ProjectItem } from '@/types/data';

export type { ProjectItem } from '@/types/data';
export const projectsData: ProjectItem[] = projectsJson as ProjectItem[];
