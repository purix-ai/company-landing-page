import { Helmet } from 'react-helmet-async'

const StructuredData = ({ type = 'organization', data = {} }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Wonderix",
          "url": "https://www.purix.ai",
          "logo": "https://www.purix.ai/logo_1024x1024.png",
          "description": "Building the Future of Educational Technology",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@purix.ai",
            "contactType": "Customer Support",
            "availableLanguage": ["English", "Chinese"]
          },
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
          "description": "AI-powered no-code platform for teachers and parents to build educational games through conversation",
          "creator": {
            "@type": "Organization",
            "name": "Wonderix"
          },
          "datePublished": "2025-01-01",
          "featureList": [
            "No coding required",
            "AI-powered game creation",
            "Educational content",
            "Personalized learning",
            "Multiple game types"
          ]
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wonderix",
          "url": "https://www.purix.ai",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.purix.ai/blog?search={search_term_string}"
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
          "image": data.image || "https://www.purix.ai/logo_1024x1024.png",
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
              "url": "https://www.purix.ai/logo_1024x1024.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || "https://www.purix.ai/blog"
          }
        }
      
      case 'breadcrumb':
        const items = data.items || [
          { name: "Home", url: "https://www.purix.ai" },
          { name: "Blog", url: "https://www.purix.ai/blog" }
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