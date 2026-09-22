import servicesJson from './services.json';
import type { ServiceItem } from '@/types/data';

export type { ServiceProcessStep, ServiceItem } from '@/types/data';
export const servicesData: ServiceItem[] = servicesJson as ServiceItem[];
