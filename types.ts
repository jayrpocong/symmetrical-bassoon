
export interface NavItem {
  label: string;
  href: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  fields: ToolField[];
  systemPrompt: string;
}

export interface ToolField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content?: string; // Added for SEO articles
}
