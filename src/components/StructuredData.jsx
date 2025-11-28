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
            "https://www.linkedin.com/company/105497266",
            "https://www.instagram.com/wonderix_edtech/",
            "https://x.com/wonderix_edtech"
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

      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bruce Chou",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Wonderix",
            "url": "https://www.wonderix.com"
          },
          "description": "Technical founder with 10+ years of AI/ML experience. Father of two, passionate about making learning engaging through technology.",
          "sameAs": [
            "https://www.linkedin.com/company/105497266",
            "https://www.instagram.com/wonderix_edtech/",
            "https://x.com/wonderix_edtech"
          ]
        }

      case 'howto':
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How Wonderix Creates Effective Educational Games",
          "description": "Learn how Wonderix transforms learning through AI-powered true gamification where learning IS the gameplay.",
          "step": [
            {
              "@type": "HowToStep",
              "position": 1,
              "name": "Learning Content = Game Rules",
              "text": "Knowledge is internalized as core game mechanics. Players must apply what they learn to progress. This is true gamification, not superficial rewards."
            },
            {
              "@type": "HowToStep",
              "position": 2,
              "name": "Instant Feedback & Guidance",
              "text": "AI identifies learning paths, progress, and challenges in real-time. Personalized hints and adaptive difficulty help kids persist without giving up or feeling bored."
            },
            {
              "@type": "HowToStep",
              "position": 3,
              "name": "Foster Intrinsic Motivation",
              "text": "Multiple pathways to competence, personalization for relatedness, and player control for autonomy. Satisfying psychological needs leads to sustained learning motivation."
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