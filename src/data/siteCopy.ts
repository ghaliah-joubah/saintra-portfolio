import siteCopyJson from './siteCopy.json';
import type { SiteCopy } from '@/types/data';

export type { SiteCopy } from '@/types/data';
export const siteCopy: SiteCopy = siteCopyJson as SiteCopy;
