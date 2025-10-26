import { MetadataRoute } from 'next'
import { generateSitemapEntries, defaultSitemapConfig } from '@/lib/sitemap-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapEntries(defaultSitemapConfig)
}