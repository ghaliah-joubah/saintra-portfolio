import companyJson from './company.json';
import type { CompanyData } from '@/types/data';

export type { LocalizedString, StatItem, CompanyData } from '@/types/data';
export const companyData: CompanyData = companyJson as CompanyData;
