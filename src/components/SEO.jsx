import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedDate,
  modifiedDate
}) => {
  const { i18n } = useTranslation()
  const siteUrl = 'https://www.purix.ai'
  const defaultImage = `${siteUrl}/logo_1024x1024.png`
  
  const seoTitle = title || 'Purix - Building the Future of Educational Technology'
  const seoDescription = description || 'Wonderix - AI-powered no-code platform for teachers and parents to build educational games through conversation. Create engaging learning experiences in just 15 minutes.'
  const seoKeywords = keywords || 'educational games, AI education, no-code platform, teacher tools, parent resources, game-based learning, Wonderix, Purix, edtech, educational technology'
  const seoImage = image || defaultImage
  const seoUrl = url || siteUrl
  const lang = i18n.language
  
  return (
    <Helmet>
      <html lang={lang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Purix" />
      <meta property="og:locale" content={lang === 'zh-TW' ? 'zh_TW' : 'en_US'} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Article specific tags for blog posts */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author || 'Purix Team'} />
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        </>
      )}
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en-US" href={`${siteUrl}${url?.replace(siteUrl, '') || ''}`} />
      <link rel="alternate" hrefLang="zh-TW" href={`${siteUrl}${url?.replace(siteUrl, '') || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${url?.replace(siteUrl, '') || ''}`} />
    </Helmet>
  )
}

export default SEO