const officialNames: Record<string, string> = {
  'Vue.js 3': 'Vue 3',
  'فيو ٣': 'Vue 3',
  'فيو': 'Vue.js',
  'نود': 'Node.js',
  'تايب سكريبت': 'TypeScript',
  'بوستغرس': 'PostgreSQL',
  'دوكر': 'Docker',
  'أمازون السحابية': 'AWS',
  'تخزين أمازون السحابي': 'AWS S3',
  'فلاتر': 'Flutter',
  'بايثون': 'Python',
  'بايثون وجانغو': 'Python / Django',
  'اتصالات الويب الفورية': 'WebRTC',
  'مونغو': 'MongoDB',
  'خرائط غوغل': 'Google Maps API',
  'ريديس': 'Redis',
  'مقابس الويب': 'WebSockets',
  'تايلويند': 'Tailwind CSS',
  'ثري جي إس': 'Three.js',
  'إكسبرس': 'Express',
  'ماي إس كيو إل': 'MySQL',
  'فاست إيه بي آي': 'FastAPI',
  'واجهة أوبن إيه آي': 'OpenAI API',
  'تشارت جي إس': 'Chart.js',
};

export function canonicalTechnologyName(name: string): string {
  const trimmed = name.trim();
  return officialNames[trimmed] ?? trimmed;
}
