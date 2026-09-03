export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface AboutTimelineEntry {
  year: string;
  title: string;
  detail: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  number: string;
  tag: string;
  title: string;
  role: string;
  description: string;
  meta: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceEntry {
  dates: string;
  title: string;
  company: string;
  bullets: string[];
}

export interface EducationEntry {
  year: string;
  title: string;
  detail: string;
}

export interface ContactLink {
  label: string;
  href: string;
  hint: string;
}

export interface TextSegment {
  text: string;
  strong?: boolean;
}

export interface Profile {
  brand: string;
  name: string;
  role: string;
  location: string;
  locationShort: string;
  email: string;
  linkedIn: string;
  github: string;
  navLinks: NavLink[];
  heroEyebrow: string;
  heroHeadline: string;
  heroLede: string;
  heroPrimaryCta: { label: string; href: string };
  heroSecondaryCta: { label: string; href: string };
  stats: HeroStat[];
  stackPills: string[];
  aboutEyebrow: string;
  aboutParagraphs: TextSegment[][];
  aboutTimeline: AboutTimelineEntry[];
  skillsEyebrow: string;
  skillGroups: SkillGroup[];
  projectsEyebrow: string;
  projects: Project[];
  experienceEyebrow: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  contactHeadline: string;
  contactBody: string;
  contactLinks: ContactLink[];
  footer: string;
  avatarSrc: string;
  avatarAlt: string;
}
