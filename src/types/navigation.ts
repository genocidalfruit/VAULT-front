export interface PostMetadata {
  title: string;
  path: string;
  slug: string;
  lastModified: Date;
  type: 'file' | 'folder';
  children?: PostMetadata[];
  description?: string;
  author?: string;
}

export interface NavigationState {
  expandedFolders: Set<string>;
  currentPath: string;
  isLoading: boolean;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}