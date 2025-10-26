import { MetadataRoute } from 'next'
import { generateSitemapEntries, defaultSitemapConfig } from '@/lib/sitemap-utils'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapEntries(defaultSitemapConfig)
}