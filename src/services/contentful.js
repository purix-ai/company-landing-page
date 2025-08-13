import { createClient } from 'contentful'

// Contentful client configuration
// Using Vite's import.meta.env for environment variables
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

// Fetch all blog posts
export const getBlogPosts = async (language = 'en-US') => {
  try {
    // Map our app language codes to Contentful locale codes
    const localeMap = {
      'zh-TW': 'zh-Hant-TW',  // Contentful uses zh-Hant-TW for Traditional Chinese
      'en-US': 'en-US'
    }
    
    const contentfulLocale = localeMap[language] || 'en-US'
    
    const response = await client.getEntries({
      content_type: 'wonderix-blog-post', // Correct content type name
      locale: contentfulLocale,
      order: '-sys.createdAt', // Newest first
    })
    
    return response.items.map(item => {
      console.log('DEBUG - Available field names:', Object.keys(item.fields))
      console.log('DEBUG - Content field value:', item.fields.content)
      console.log('DEBUG - Excerpt field value:', item.fields.excerpt)
      
      return {
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        content: item.fields.content,
        publishedDate: item.fields.published, // Fixed: uses 'published' field from Contentful
        language: language, // Removed fields.language since you don't have this field
        excerpt: item.fields.excerpt,
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch a single blog post by slug
export const getBlogPostBySlug = async (slug, language = 'en-US') => {
  try {
    // Map our app language codes to Contentful locale codes
    const localeMap = {
      'zh-TW': 'zh-Hant-TW',  // Contentful uses zh-Hant-TW for Traditional Chinese
      'en-US': 'en-US'
    }
    
    const contentfulLocale = localeMap[language] || 'en-US'
    
    const response = await client.getEntries({
      content_type: 'wonderix-blog-post', // Correct content type name
      'fields.slug': slug,
      locale: contentfulLocale,
      limit: 1,
    })
    
    if (response.items.length === 0) {
      return null
    }
    
    const item = response.items[0]
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.content,
      publishedDate: item.fields.published, // Fixed: uses 'published' field from Contentful
      language: language, // Removed fields.language since you don't have this field
      excerpt: item.fields.excerpt,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Helper function to format date
export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}