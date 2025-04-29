import { Education, Experience, Project, Skill, Certification, Social } from '../types';

export const education: Education[] = [
  {
    institution: 'Trine University',
    degree: 'Master of Science in Engineering Management',
    duration: '2022 - 2023',
    location: 'Michigan, USA',
    description: 'Focused on engineering principles combined with business acumen to drive organizational excellence.'
  },
  {
    institution: 'Vellore Institute of Technology (VIT)',
    degree: 'Bachelor of Technology in Mechanical Engineering',
    duration: '2017 - 2021',
    location: 'Vellore, India',
    description: 'Specialized in mechanical engineering with a minor in computer science applications.'
  }
];

export const experience: Experience[] = [
  {
    title: 'DevOps Engineer',
    company: 'Acme Technologies',
    duration: 'Jun 2023 - Present',
    location: 'Remote',
    description: [
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%',
      'Managed AWS infrastructure using Terraform, including EKS clusters and serverless applications',
      'Automated infrastructure provisioning and application deployments with Infrastructure as Code',
      'Orchestrated containerized applications using Kubernetes for scalable and resilient services'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'Trine University',
    duration: 'Jan 2022 - May 2023',
    location: 'Michigan, USA',
    description: [
      'Researched cloud-native architectures and deployment strategies',
      'Developed automation scripts to streamline research data collection and analysis',
      'Collaborated with faculty on publications related to modern infrastructure management',
      'Mentored undergraduate students on DevOps practices and cloud technologies'
    ]
  },
  {
    title: 'DevOps Intern',
    company: 'Tech Innovations Inc.',
    duration: 'May 2021 - Dec 2021',
    location: 'Bangalore, India',
    description: [
      'Assisted in setting up Docker-based development environments',
      'Contributed to monitoring and alerting systems using Prometheus and Grafana',
      'Supported deployment automation using Jenkins pipelines',
      'Documented infrastructure components and deployment procedures'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'AWS EKS CI/CD Pipeline',
    description: 'Designed and implemented a robust CI/CD pipeline for deploying microservices to Amazon EKS using GitHub Actions and ArgoCD.',
    technologies: ['AWS', 'Kubernetes', 'GitHub Actions', 'Terraform', 'ArgoCD'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    link: '#'
  },
  {
    title: 'AI Sentiment Analysis API',
    description: 'Developed a scalable sentiment analysis API using Python and deployed it as serverless functions with infrastructure as code.',
    technologies: ['AWS Lambda', 'Python', 'Terraform', 'API Gateway', 'Docker'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    link: '#'
  },
  {
    title: 'Microservices Banking Platform',
    description: 'Built a containerized microservices architecture for a banking application with focus on resilience and scalability.',
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Python', 'Helm'],
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    link: '#'
  },
  {
    title: 'FarmFresh E-Commerce',
    description: 'Created an infrastructure platform for an e-commerce solution connecting farmers directly to consumers.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Docker', 'Kubernetes'],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    link: '#'
  }
];

export const skills: Skill[] = [
  { name: 'AWS', icon: 'Cloud', category: 'cloud', level: 90 },
  { name: 'Terraform', icon: 'Layers', category: 'infrastructure', level: 85 },
  { name: 'Kubernetes', icon: 'Ship', category: 'containerization', level: 90 },
  { name: 'GitHub Actions', icon: 'GitBranch', category: 'cicd', level: 80 },
  { name: 'Python', icon: 'Code', category: 'programming', level: 85 },
  { name: 'Docker', icon: 'Box', category: 'containerization', level: 90 },
  { name: 'CI/CD', icon: 'Repeat', category: 'cicd', level: 85 },
  { name: 'Linux', icon: 'Terminal', category: 'other', level: 80 },
  { name: 'Git', icon: 'Git', category: 'other', level: 85 },
  { name: 'Monitoring', icon: 'Activity', category: 'other', level: 75 },
  { name: 'Jenkins', icon: 'Server', category: 'cicd', level: 70 },
  { name: 'Azure', icon: 'Cloud', category: 'cloud', level: 65 }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'June 2022',
    link: '#'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'September 2022',
    link: '#'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'January 2023',
    link: '#'
  }
];

export const socials: Social[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/vamsi-krishna-bhavana',
    icon: 'Linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/vamsi-krishna-bhavana',
    icon: 'Github'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/vamsi_devops',
    icon: 'Twitter'
  },
  {
    platform: 'Email',
    url: 'mailto:vamsi.bhavana@example.com',
    icon: 'Mail'
  }
];

export const about = {
  headline: 'DevOps Engineer & Cloud Infrastructure Specialist',
  introduction: 'I\'m Vamsi Krishna Bhavana, a DevOps Engineer passionate about building resilient, scalable infrastructure and automating deployment pipelines. With expertise in AWS, Kubernetes, and Infrastructure as Code, I help organizations embrace DevOps culture and practices.',
  description: 'My approach combines technical expertise with business acumen to deliver solutions that drive efficiency and reliability. I specialize in containerization, automation, and creating robust CI/CD pipelines that enable teams to deploy with confidence.',
  mission: 'I aim to bridge the gap between development and operations, creating seamless workflows that accelerate delivery while maintaining stability and security.',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
};