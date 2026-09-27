import type { LocalizedString, ServiceItem } from '@/types/data';
import { canonicalTechnologyName } from '@/utils/technologyNames';
import { companyState, projectsState, servicesState } from '@/services/dataService';

export type SearchGroup = 'services' | 'projects' | 'technologies';

export interface PortfolioSearchResult {
  id: string;
  group: SearchGroup;
  route: string | null;
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString;
  aliases?: LocalizedString[];
  score?: number;
}

const technologyArabicNames: Record<string, string> = {
  'AWS': 'أمازون السحابية', 'AWS S3': 'تخزين أمازون السحابي', 'Chart.js': 'تشارت جي إس',
  'Docker': 'دوكر', 'Express': 'إكسبرس', 'FastAPI': 'فاست إيه بي آي', 'Flutter': 'فلاتر',
  'Google Maps API': 'خرائط غوغل', 'MongoDB': 'مونغو دي بي', 'MySQL': 'ماي إس كيو إل',
  'Node.js': 'نود جي إس', 'OpenAI API': 'واجهة أوبن إيه آي', 'PostgreSQL': 'بوستغرس',
  'Python': 'بايثون', 'Python / Django': 'بايثون وجانغو', 'Redis': 'ريديس',
  'Tailwind CSS': 'تايلويند سي إس إس', 'Three.js': 'ثري جي إس', 'TypeScript': 'تايب سكريبت',
  'Vue 3': 'فيو 3', 'Vue.js': 'فيو جي إس', 'WebRTC': 'اتصالات الويب الفورية',
  'WebSockets': 'مقابس الويب'
};

function localized(en: string, ar: string): LocalizedString {
  return { en, ar };
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[^\p{L}\p{N}+#.\s/-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value: string): string[] {
  return normalize(value).split(/[^\p{L}\p{N}+#.]+/u).filter(Boolean);
}

function containsWholePhrase(value: string, query: string): boolean {
  const haystack = tokens(value);
  const needle = tokens(query);
  if (!needle.length || needle.length > haystack.length) return false;
  return haystack.some((_, index) => needle.every((token, offset) => haystack[index + offset] === token));
}

function serviceSearchText(service: ServiceItem): string {
  return [
    service.title.en, service.title.ar, service.category.en, service.category.ar,
    service.fullDescription.en, service.fullDescription.ar,
    ...service.whatsIncluded.flatMap((item) => [item.en, item.ar])
  ].join(' ');
}

function relatedServiceRoute(name: string, category: string): string | null {
  const directMatch = servicesState.find((service) => containsWholePhrase(serviceSearchText(service), name));
  if (directMatch) return `/services/${directMatch.id}`;

  const normalizedCategory = normalize(category);
  if (!normalizedCategory) return null;
  const categoryMatch = servicesState.find((service) => {
    const identity = `${service.title.en} ${service.title.ar} ${service.category.en} ${service.category.ar}`;
    return containsWholePhrase(identity, normalizedCategory);
  });
  return categoryMatch ? `/services/${categoryMatch.id}` : null;
}

function technologyDocuments(): PortfolioSearchResult[] {
  const documents = new Map<string, PortfolioSearchResult>();

  for (const project of projectsState) {
    for (const rawTechnology of project.technologies) {
      const name = canonicalTechnologyName(rawTechnology);
      const key = normalize(name);
      const arabicName = technologyArabicNames[name] ?? name;
      if (!documents.has(key)) {
        documents.set(key, {
          id: `technology-${key.replace(/[^\p{L}\p{N}]+/gu, '-')}`,
          group: 'technologies', route: `/projects/${project.id}`,
          title: localized(name, arabicName),
          description: localized(`Used in ${project.title.en}`, `مستخدمة في ${project.title.ar}`),
          keywords: localized(`${name} technology framework ${rawTechnology}`, `${arabicName} تقنية اطار ${rawTechnology}`)
        });
      }
    }
  }

  for (const technology of companyState.technologies) {
    for (const rawName of technology.name.split('/').map((part) => part.trim())) {
      const name = canonicalTechnologyName(rawName);
      const key = normalize(name);
      if (!documents.has(key)) {
        const arabicName = technologyArabicNames[name] ?? name;
        documents.set(key, {
          id: `technology-${key.replace(/[^\p{L}\p{N}]+/gu, '-')}`,
          group: 'technologies', route: relatedServiceRoute(name, technology.category),
          title: localized(name, arabicName),
          description: localized(`${technology.category} technology`, `تقنية ضمن ${technology.category}`),
          keywords: localized(`${name} ${technology.category} technology`, `${arabicName} ${technology.category} تقنية`)
        });
      }
    }
  }

  return [...documents.values()];
}

function buildIndex(): PortfolioSearchResult[] {
  const serviceDocuments: PortfolioSearchResult[] = servicesState.map((service) => ({
    id: `service-${service.id}`, group: 'services', route: `/services/${service.id}`,
    title: service.title, description: service.shortDescription,
    keywords: {
      en: `${service.category.en} ${service.fullDescription.en} ${service.whatsIncluded.map((item) => item.en).join(' ')}${service.id === 'ai-integration' ? ' AI artificial intelligence' : ''}`,
      ar: `${service.category.ar} ${service.fullDescription.ar} ${service.whatsIncluded.map((item) => item.ar).join(' ')}${service.id === 'ai-integration' ? ' الذكاء الاصطناعي ذكاء اصطناعي' : ''}`
    },
    aliases: [
      service.category,
      ...(service.id === 'ai-integration'
        ? [localized('AI', 'الذكاء الاصطناعي'), localized('artificial intelligence', 'ذكاء اصطناعي')]
        : [])
    ]
  }));

  const projectDocuments: PortfolioSearchResult[] = projectsState.map((project) => ({
    id: `project-${project.id}`, group: 'projects', route: `/projects/${project.id}`,
    title: project.title, description: project.shortDescription,
    keywords: {
      en: `${project.type.en} ${project.fullDescription.en} ${project.technologies.join(' ')} ${project.platform.en}`,
      ar: `${project.type.ar} ${project.fullDescription.ar} ${project.technologies.map((technology) => technologyArabicNames[canonicalTechnologyName(technology)] ?? technology).join(' ')} ${project.platform.ar}`
    },
    aliases: [project.type]
  }));

  return [...serviceDocuments, ...projectDocuments, ...technologyDocuments()];
}

function scoreDocument(document: PortfolioSearchResult, query: string): number {
  const titles = [normalize(document.title.en), normalize(document.title.ar)];
  const keywords = [normalize(document.keywords.en), normalize(document.keywords.ar)];
  const descriptions = [normalize(document.description.en), normalize(document.description.ar)];
  const aliases = (document.aliases ?? []).flatMap((alias) => [normalize(alias.en), normalize(alias.ar)]);

  if (titles.some((title) => title === query)) return 900;
  if (aliases.some((alias) => alias === query)) return 850;
  if (titles.some((title) => title.startsWith(query))) return 800;
  if (titles.some((title) => containsWholePhrase(title, query))) return 700;
  if ([...keywords, ...descriptions].some((value) => containsWholePhrase(value, query))) return 500;
  if (titles.some((title) => title.includes(query))) return 300;
  if (keywords.some((value) => value.includes(query))) return 200;
  if (descriptions.some((value) => value.includes(query))) return 100;
  return 0;
}

export function usePortfolioSearch() {
  function search(rawQuery: string): PortfolioSearchResult[] {
    const query = normalize(rawQuery);
    if (query.length < 2) return [];

    return buildIndex()
      .map((document, index) => ({ ...document, score: scoreDocument(document, query), index }))
      .filter((document) => document.score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, 24)
      .map(({ index: _index, ...document }) => document);
  }

  return { search };
}
