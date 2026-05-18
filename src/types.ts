
export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
}
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  packages: ServicePackage[];
}
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  features: Array<string>;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt1: string;
  excerpt2: string;
  date: string;
  author: string;
  image: string;
  category: string;
 features: Array<string>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

declare module "leader-line-new";