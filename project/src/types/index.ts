export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'cloud' | 'cicd' | 'containerization' | 'infrastructure' | 'programming' | 'other';
  level: number;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}