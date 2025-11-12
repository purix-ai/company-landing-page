import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getBlogPostBySlug, formatDate } from '../services/contentful'
import { FaCalendar, FaArrowRight } from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import SEO from './SEO'
import StructuredData from './StructuredData'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Rich text rendering options
  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-lg font-bold text-gray-900 mt-4 mb-3">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="text-gray-700">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-primary-500 pl-6 py-2 mb-4 italic text-gray-600 bg-gray-50">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="my-8 border-gray-300" />
      ),
    },
    renderMark: {
      bold: (text) => <strong className="font-semibold">{text}</strong>,
      italic: (text) => <em className="italic">{text}</em>,
      underline: (text) => <u className="underline">{text}</u>,
    },
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const blogPost = await getBlogPostBySlug(slug, i18n.language)
        if (!blogPost) {
          setError('Post not found')
        } else {
          setPost(blogPost)
        }
      } catch (err) {
        setError('Failed to load blog post')
        console.error('Error fetching post:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug, i18n.language])

  const handleBackToBlog = () => {
    navigate('/blog')
  }

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div 
              className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"
              role="progressbar"
              aria-label={i18n.language === 'zh-TW' ? '正在載入文章' : 'Loading article'}
            ></div>
            <p className="mt-4 text-gray-600">
              {i18n.language === 'zh-TW' ? '載入中...' : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {i18n.language === 'zh-TW' ? '找不到文章' : 'Post Not Found'}
            </h1>
            <p className="text-gray-600 mb-8">
              {error || (i18n.language === 'zh-TW' ? '此文章不存在或已被移除。' : 'This post does not exist or has been removed.')}
            </p>
            <button 
              onClick={handleBackToBlog}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              <FaArrowRight className="rotate-180 mr-2" />
              {i18n.language === 'zh-TW' ? '返回部落格' : 'Back to Blog'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${post.title} | Wonderix Blog`}
        description={post.excerpt || `Read ${post.title} on the Wonderix blog. Learn about educational game creation and AI-powered learning.`}
        type="article"
        url={`https://www.wonderix.app/blog/${post.slug || post.id}`}
        publishedDate={post.publishedDate}
      />
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          url: `https://www.wonderix.app/blog/${post.slug || post.id}`,
          publishedDate: post.publishedDate
        }}
      />
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://www.wonderix.app" },
            { name: "Blog", url: "https://www.wonderix.app/blog" },
            { name: post.title, url: `https://www.wonderix.app/blog/${post.slug || post.id}` }
          ]
        }}
      />
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToBlog}
            className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <FaArrowRight className="rotate-180 mr-2" />
            {i18n.language === 'zh-TW' ? '返回部落格' : 'Back to Blog'}
          </button>
          
          <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              <header className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaCalendar className="mr-2" />
                  <span>{formatDate(post.publishedDate)}</span>
                </div>
              </header>
              
              <div className="max-w-none">
                {post.content ? (
                  documentToReactComponents(post.content, renderOptions)
                ) : (
                  <p className="text-gray-700">{post.excerpt || 'Content coming soon...'}</p>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default BlogPost