import { getBlogPosts } from '../services/contentful'

const generateSitemap = async () => {
  const siteUrl = 'https://www.purix.ai'
  const currentDate = new Date().toISOString()
  
  // Static pages
  const staticPages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: '0.8',
      lastmod: currentDate
    }
  ]
  
  // Fetch blog posts
  let blogPosts = []
  try {
    const enPosts = await getBlogPosts('en-US')
    const zhPosts = await getBlogPosts('zh-TW')
    
    // Combine unique posts
    const allPosts = [...enPosts, ...zhPosts]
    const uniquePosts = Array.from(new Map(allPosts.map(post => 
      [`${post.slug || post.id}`, post]
    )).values())
    
    blogPosts = uniquePosts.map(post => ({
      url: `/blog/${post.slug || post.id}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: post.publishedDate || currentDate
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }
  
  const allPages = [...staticPages, ...blogPosts]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${siteUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="zh-TW" href="${siteUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page.url}" />
  </url>`).join('\n')}
</urlset>`
  
  return sitemap
}

export default generateSitemap