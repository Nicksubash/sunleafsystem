import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export interface SitemapConfig {
  baseUrl: string
  appDir: string
  excludedDirs: string[]
  excludedFiles: string[]
  priorities: Record<string, number>
  changeFrequencies: Record<string, 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'>
}

export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://sunleafsystem.com.np',
  appDir: join(process.cwd(), 'src', 'app'),
  excludedDirs: ['api', 'admin', 'test-theme', '_next', 'node_modules', 'data'],
  excludedFiles: ['layout.tsx', 'loading.tsx', 'error.tsx', 'not-found.tsx'],
  
  priorities: {
    '/': 1.0,
    '/home': 0.9,
    '/services': 0.9,
    '/services/web-development': 0.85, 
    '/about': 0.8,
    '/projects': 0.8,
    '/contact': 0.7,
  },
  
  changeFrequencies: {
    '/projects': 'weekly',
    '/services': 'monthly',
    '/about': 'monthly',
    '/contact': 'monthly',
  }
}

// Function to recursively scan directories for page files
export function getPagesFromDirectory(
  dir: string, 
  basePath: string = '', 
  config: SitemapConfig = defaultSitemapConfig
): string[] {
  const pages: string[] = []
  
  try {
    const items = readdirSync(dir)
    
    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip excluded directories
        if (config.excludedDirs.includes(item)) {
          continue
        }
        
        const newBasePath = basePath ? `${basePath}/${item}` : item
        pages.push(...getPagesFromDirectory(fullPath, newBasePath, config))
      } else if (item === 'page.tsx' || item === 'page.js') {
        // Found a page file, add the route
        if (basePath) {
          pages.push(`/${basePath}`)
        } else {
          pages.push('/')
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return pages
}

// Function to get priority based on route
export function getPriority(route: string, config: SitemapConfig = defaultSitemapConfig): number {
  return config.priorities[route] || 0.5
}

// Function to get change frequency based on route
export function getChangeFrequency(
  route: string, 
  config: SitemapConfig = defaultSitemapConfig
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  return config.changeFrequencies[route] || 'monthly'
}

// Function to get last modified date
export function getLastModified(route: string): Date {
  // For now, return current date
  // You could enhance this to read actual file modification dates
  return new Date()
}

// Function to generate sitemap entries
export function generateSitemapEntries(config: SitemapConfig = defaultSitemapConfig) {
  const pages = getPagesFromDirectory(config.appDir, '', config)
  
  return pages.map(route => ({
    url: `${config.baseUrl}${route}`,
    lastModified: getLastModified(route),
    changeFrequency: getChangeFrequency(route, config),
    priority: getPriority(route, config),
  })).sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
