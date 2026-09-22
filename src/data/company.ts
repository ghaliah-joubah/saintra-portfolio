export interface LocalizedString {
  ar: string;
  en: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: LocalizedString;
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
  values: {
    title: LocalizedString;
    description: LocalizedString;
    icon: string;
  }[];
  stats: StatItem[];
  technologies: {
    name: string;
    category: string;
    icon?: string;
  }[];
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

export const companyData: CompanyData = {
  name: {
    ar: 'سينترا | سيقما تكنولوجي لتقنية المعلومات',
    en: 'SAINTRA | Sigma Technology for IT'
  },
  shortName: {
    ar: 'سينترا',
    en: 'SAINTRA'
  },
  tagline: {
    ar: 'نبتكر الحلول البرمجية الذكية لترسخ حضورك الرقمي',
    en: 'Innovating smart software solutions for your digital footprint'
  },
  aboutStory: {
    ar: 'سينترا (سيقما تكنولوجي) هي بيت خبرة برمجية متخصص في الهندسة الرقمية وبناء المنظومات السحابية المعقدة. نساعد الشركات والمؤسسات على التحول الرقمي من خلال تطوير تطبيقات ويب وجوال متطورة، وأنظمة إدارة المنشآت، وحلول الذكاء الاصطناعي المبتكرة وفق أعلى معايير الأمان والجودة العالمية.',
    en: 'SAINTRA (Sigma Technology) is a premier software engineering house specializing in enterprise digital transformation and cloud systems. We empower businesses with cutting-edge web/mobile apps, ERPs, and custom AI integration with uncompromised quality and security.'
  },
  establishedYear: '2021',
  headquarters: {
    ar: 'الرياض، المملكة العربية السعودية',
    en: 'Riyadh, Kingdom of Saudi Arabia'
  },
  branches: [
    { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, KSA' },
    { ar: 'جدة، المملكة العربية السعودية', en: 'Jeddah, KSA' }
  ],
  mission: {
    ar: 'تمكين قطاعات الأعمال والمؤسسات من تحقيق أقصى طاقاتها الرقمية من خلال تقديم برمجيات عالية الكفاءة والقابلية للتوسع.',
    en: 'Empowering enterprises to unleash their full digital potential through highly efficient, scalable, and resilient software.'
  },
  vision: {
    ar: 'أن نكون الشريك البرمجي المفضل والأول في منطقة الشرق الأوسط وشمال أفريقيا لبناء المنصات والأنظمة المبتكرة.',
    en: 'To be the preferred software engineering partner across MENA for building transformative digital platforms.'
  },
  values: [
    {
      title: { ar: 'الابتكار المستمر', en: 'Continuous Innovation' },
      description: { ar: 'نستثمر في أحدث التقنيات لتقديم حلول سابقة لعصرها.', en: 'Investing in cutting-edge technologies to deliver forward-looking software.' },
      icon: 'Zap'
    },
    {
      title: { ar: 'الجودة البرمجية', en: 'Engineering Excellence' },
      description: { ar: 'نلتزم بكتابة كود نظيف، آمن، وقابل للتوسع المستقبلي.', en: 'Committed to writing clean, secure, and maintainable codebase.' },
      icon: 'Code'
    },
    {
      title: { ar: 'الشفافية والشراكة', en: 'Transparency & Partnership' },
      description: { ar: 'نعمل كشركاء نجاح حقيقيين مع عملائنا في كل مرحلة.', en: 'Operating as genuine growth partners with complete transparency.' },
      icon: 'Users'
    },
    {
      title: { ar: 'سرعة التنفيذ', en: 'Agile & Speed' },
      description: { ar: 'نعتمد منهجيات Agile لضمان تسليم المشاريع بدقة في وقتها.', en: 'Utilizing Agile workflows to ensure timely and precise delivery.' },
      icon: 'Clock'
    }
  ],
  stats: [
    {
      id: 'projects',
      value: 45,
      suffix: '+',
      label: { ar: 'مشروعاً ناجحاً', en: 'Successful Projects' }
    },
    {
      id: 'experience',
      value: 5,
      suffix: '+',
      label: { ar: 'سنوات خبرة', en: 'Years Experience' }
    },
    {
      id: 'clients',
      value: 35,
      suffix: '+',
      label: { ar: 'عميل وشركة', en: 'Enterprise Clients' }
    },
    {
      id: 'satisfaction',
      value: 99,
      suffix: '%',
      label: { ar: 'نسبة رضا العملاء', en: 'Satisfaction Rate' }
    }
  ],
  technologies: [
    { name: 'Vue.js / Nuxt', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js / Express', category: 'Backend' },
    { name: 'Python / Django', category: 'Backend & AI' },
    { name: 'Flutter / React Native', category: 'Mobile' },
    { name: 'PostgreSQL / MongoDB', category: 'Database' },
    { name: 'Docker / Kubernetes', category: 'DevOps' },
    { name: 'AWS / Google Cloud', category: 'Cloud' }
  ],
  contact: {
    email: 'info@saintra.sa',
    phone: '+966500000000',
    whatsapp: '+966500000000',
    address: {
      ar: 'طريق الملك فهد، حي الصحافة، الرياض، المملكة العربية السعودية',
      en: 'King Fahd Road, Al Sahafah Dist., Riyadh, Saudi Arabia'
    },
    workingHours: {
      ar: 'الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً',
      en: 'Sunday - Thursday: 9:00 AM - 5:00 PM'
    }
  },
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    x: 'https://x.com',
    facebook: 'https://facebook.com'
  }
};
