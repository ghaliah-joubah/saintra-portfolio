export interface LocalizedString {
  ar: string;
  en: string;
}

export interface ValueItem {
  id?: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: LocalizedString;
}

export interface TechnologyItem {
  name: string;
  category: string;
  icon?: string;
}

export interface CompanyData {
  name: LocalizedString;
  shortName: LocalizedString;
  tagline: LocalizedString;
  aboutStory: LocalizedString;
  establishedYear: string;
  headquarters: LocalizedString;
  branches: LocalizedString[];
  mission: LocalizedString;
  vision: LocalizedString;
  values: ValueItem[];
  stats: StatItem[];
  technologies: TechnologyItem[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: LocalizedString;
    workingHours: LocalizedString;
  };
  socials: {
    linkedin: string;
    github: string;
    x: string;
    facebook: string;
  };
}

export interface ServiceProcessStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  icon: string;
  image?: string;
  videoUrl?: string;
  whatsIncluded: LocalizedString[];
  ourProcess: ServiceProcessStep[];
}

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  type: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  coverImage: string;
  gallery: string[];
  technologies: string[];
  platform: LocalizedString;
  year: string;
  completionDate: LocalizedString;
  teamSize: LocalizedString;
  liveUrl?: string;
  serviceIds: string[];
}

export interface SiteCopy {
  nav: {
    home: LocalizedString;
    about: LocalizedString;
    services: LocalizedString;
    projects: LocalizedString;
    contact: LocalizedString;
  };
  buttons: {
    viewProjects: LocalizedString;
    contactUs: LocalizedString;
    viewAllServices: LocalizedString;
    viewAllProjects: LocalizedString;
    readMore: LocalizedString;
    details: LocalizedString;
    visitProject: LocalizedString;
    sendMessage: LocalizedString;
    backToHome: LocalizedString;
    filterAll: LocalizedString;
  };
  home: {
    heroBadge: LocalizedString;
    heroTitle: LocalizedString;
    heroSubtitle: LocalizedString;
    whyChooseUsTitle: LocalizedString;
    whyChooseUsSubtitle: LocalizedString;
    servicesTitle: LocalizedString;
    servicesSubtitle: LocalizedString;
    projectsTitle: LocalizedString;
    projectsSubtitle: LocalizedString;
    ctaTitle: LocalizedString;
    ctaSubtitle: LocalizedString;
  };
  about: {
    title: LocalizedString;
    subtitle: LocalizedString;
    storyTitle: LocalizedString;
    statsTitle: LocalizedString;
  };
  servicesPage: {
    title: LocalizedString;
    subtitle: LocalizedString;
    emptyState: LocalizedString;
  };
  serviceDetailsPage: {
    whatsIncludedTitle: LocalizedString;
    ourProcessTitle: LocalizedString;
    relatedProjectsTitle: LocalizedString;
    videoTitle: LocalizedString;
    notFound: LocalizedString;
  };
  projectsPage: {
    title: LocalizedString;
    subtitle: LocalizedString;
    emptyState: LocalizedString;
  };
  projectDetailsPage: {
    galleryTitle: LocalizedString;
    infoTitle: LocalizedString;
    techTitle: LocalizedString;
    relatedServicesTitle: LocalizedString;
    yearLabel: LocalizedString;
    completionLabel: LocalizedString;
    notFound: LocalizedString;
    detailsScopeTitle: LocalizedString;
  };
  contactPage: {
    title: LocalizedString;
    subtitle: LocalizedString;
    formTitle: LocalizedString;
    placeholders: {
      name: LocalizedString;
      email: LocalizedString;
      phone: LocalizedString;
      service: LocalizedString;
      message: LocalizedString;
    };
    directContactTitle: LocalizedString;
    addressLabel: LocalizedString;
    workingHoursLabel: LocalizedString;
    emailLabel: LocalizedString;
  };
  footer: {
    rights: LocalizedString;
    tagline: LocalizedString;
    quickLinks: LocalizedString;
    services: LocalizedString;
    contactInfo: LocalizedString;
  };
  common: {
    backToTop: LocalizedString;
    languageSwitch: LocalizedString;
  };
}

export interface AuthConfig {
  passwordHash: string;
  adminTitle: LocalizedString;
}
