export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Location {
  address?: string;
  postalCode?: string;
  city: string;
  countryCode?: string;
  region: string;
}

export interface Basics {
  name: string;
  label: string;
  image?: string;
  email: string;
  phone: string;
  url?: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  location?: string;
}

export interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface Skill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary?: string;
}

export interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url?: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  url?: string;
  summary?: string;
}

export interface ResumeData {
  basics: Basics;
  work: Work[];
  education: Education[];
  skills: Skill[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  // Extended fields for flexibility
  projects?: Array<{
    name: string;
    description: string;
    highlights: string[];
    url?: string;
  }>;
}

export enum ThemeType {
  MODERN = 'Modern',
  CLASSIC = 'Classic',
  MINIMAL = 'Minimal'
}