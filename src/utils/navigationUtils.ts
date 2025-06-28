import { getCollection } from 'astro:content';
import type { PostMetadata, BreadcrumbItem } from '../types/navigation';

// Function to get title from filename
function getTitleFromFilename(slug: string): string {
  const filename = slug.split('/').pop() || '';
  return filename
    .replace(/\.(md|canvas)$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to check if file is a canvas file
function isCanvasFile(slug: string): boolean {
  return slug.endsWith('.canvas');
}

export async function buildNavigationTree(): Promise<PostMetadata[]> {
  try {
    const posts = await getCollection('posts');
    const tree: PostMetadata[] = [];
    const folderMap = new Map<string, PostMetadata>();

    // Sort posts by path to ensure consistent ordering
    const sortedPosts = posts.sort((a, b) => a.slug.localeCompare(b.slug));

    for (const post of sortedPosts) {
      const pathParts = post.slug.split('/');
      let currentPath = '';
      let currentLevel = tree;

      // Build folder structure
      for (let i = 0; i < pathParts.length - 1; i++) {
        const folderName = pathParts[i];
        currentPath = currentPath ? `${currentPath}/${folderName}` : folderName;
        
        let folder = folderMap.get(currentPath);
        if (!folder) {
          folder = {
            title: formatFolderName(folderName),
            path: currentPath,
            slug: currentPath,
            lastModified: new Date(),
            type: 'folder',
            children: []
          };
          folderMap.set(currentPath, folder);
          currentLevel.push(folder);
        }
        
        currentLevel = folder.children!;
      }

      // Add the file
      const fileMetadata: PostMetadata = {
        title: post.data.title || getTitleFromFilename(post.slug),
        path: post.slug,
        slug: post.slug,
        lastModified: post.data.pubDate || new Date(),
        type: 'file',
        description: post.data.description,
        author: post.data.author
      };

      currentLevel.push(fileMetadata);
    }

    return tree;
  } catch (error) {
    console.error('Error building navigation tree:', error);
    return [];
  }
}

function formatFolderName(folderName: string): string {
  return folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateBreadcrumbs(path: string, isFile: boolean = false): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  if (!path) return breadcrumbs;

  const pathParts = path.split('/').filter(Boolean);
  let currentPath = '';

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    currentPath = currentPath ? `${currentPath}/${part}` : part;
    
    // For files, add all parts including the file name
    if (isFile) {
      if (i < pathParts.length - 1) {
        // This is a folder part
        breadcrumbs.push({
          label: formatFolderName(part),
          path: `/category/${currentPath}`
        });
      } else {
        // This is the file name - we'll get the actual title from the post data
        // For now, use the formatted folder name as fallback
        breadcrumbs.push({
          label: formatFolderName(part),
          path: `/posts/${currentPath}`
        });
      }
    } else {
      // For category pages, don't add the current folder to breadcrumbs
      if (i < pathParts.length - 1) {
        breadcrumbs.push({
          label: formatFolderName(part),
          path: `/category/${currentPath}`
        });
      }
    }
  }

  return breadcrumbs;
}

export function generateBreadcrumbsForPost(path: string, postTitle: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  if (!path) return breadcrumbs;

  const pathParts = path.split('/').filter(Boolean);
  let currentPath = '';

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    currentPath = currentPath ? `${currentPath}/${part}` : part;
    
    if (i < pathParts.length - 1) {
      // This is a folder part
      breadcrumbs.push({
        label: formatFolderName(part),
        path: `/category/${currentPath}`
      });
    } else {
      // This is the file - use the actual post title
      breadcrumbs.push({
        label: postTitle,
        path: `/posts/${currentPath}`
      });
    }
  }

  return breadcrumbs;
}

export function generateBreadcrumbsForCategory(path: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  if (!path) return breadcrumbs;

  const pathParts = path.split('/').filter(Boolean);
  let currentPath = '';

  // Include ALL parts of the path, including the current category
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    currentPath = currentPath ? `${currentPath}/${part}` : part;
    
    // Add all parts except the last one as clickable links
    if (i < pathParts.length - 1) {
      breadcrumbs.push({
        label: formatFolderName(part),
        path: `/category/${currentPath}`
      });
    } else {
      // Add the current category as non-clickable (current page)
      breadcrumbs.push({
        label: formatFolderName(part),
        path: `/category/${currentPath}`
      });
    }
  }

  return breadcrumbs;
}

export function findPostInTree(tree: PostMetadata[], targetPath: string): PostMetadata | null {
  for (const item of tree) {
    if (item.path === targetPath) {
      return item;
    }
    if (item.children) {
      const found = findPostInTree(item.children, targetPath);
      if (found) return found;
    }
  }
  return null;
}

export function getAllPaths(tree: PostMetadata[]): string[] {
  const paths: string[] = [];
  
  function traverse(items: PostMetadata[]) {
    for (const item of items) {
      paths.push(item.path);
      if (item.children) {
        traverse(item.children);
      }
    }
  }
  
  traverse(tree);
  return paths;
}