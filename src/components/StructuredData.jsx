import { Helmet } from 'react-helmet-async'

const StructuredData = ({ type = 'organization', data = {} }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Wonderix",
          "url": "https://www.wonderix.com",
          "logo": "https://www.wonderix.com/logo_1024x1024.png",
          "description": "Building the Future of Educational Technology through AI-powered gamified learning and game-based educational experiences",
          "sameAs": [
            "https://www.linkedin.com/company/105497266"
          ]
        }
      
      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Wonderix",
          "applicationCategory": "EducationApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/PreOrder"
          },
          "description": "AI-powered no-code platform for teachers and parents to build gamified learning experiences and game-based educational games through conversation. True gamification where learning is the gameplay.",
          "creator": {
            "@type": "Organization",
            "name": "Wonderix"
          },
          "datePublished": "2025-01-01",
          "featureList": [
            "No coding required",
            "AI-powered gamified learning",
            "True gamification and game-based learning",
            "Personalized learning experiences",
            "Multiple educational game types"
          ]
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wonderix",
          "url": "https://www.wonderix.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.wonderix.com/blog?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "Blog Post",
          "description": data.description || "",
          "image": data.image || "https://www.wonderix.com/logo_1024x1024.png",
          "datePublished": data.publishedDate || new Date().toISOString(),
          "dateModified": data.modifiedDate || data.publishedDate || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Wonderix Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Wonderix",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.wonderix.com/logo_1024x1024.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || "https://www.wonderix.com/blog"
          }
        }
      
      case 'breadcrumb':
        const items = data.items || [
          { name: "Home", url: "https://www.wonderix.com" },
          { name: "Blog", url: "https://www.wonderix.com/blog" }
        ]
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        }
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Wonderix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wonderix is an AI-powered no-code platform that enables teachers and parents to create educational games through conversation. No coding skills required."
              }
            },
            {
              "@type": "Question",
              "name": "When will Wonderix launch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wonderix is scheduled to launch in Q4 2025. Join our waitlist for early access and exclusive benefits."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need coding skills to use Wonderix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, Wonderix requires zero coding skills. You create games through natural conversation with our AI."
              }
            }
          ]
        }
      
      default:
        return null
    }
  }
  
  const schema = generateSchema()
  
  if (!schema) return null
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default StructuredData