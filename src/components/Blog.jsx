import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getBlogPosts, formatDate } from '../services/contentful'
import { FaCalendar, FaArrowRight, FaClock } from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

const Blog = () => {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  // Rich text rendering options with proper styling
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
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const blogPosts = await getBlogPosts(i18n.language)
        setPosts(blogPosts)
      } catch (err) {
        setError('Failed to load blog posts')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [i18n.language])

  const handlePostClick = (post) => {
    setSelectedPost(post)
  }

  const handleBackToBlog = () => {
    setSelectedPost(null)
  }

  // Show individual blog post
  if (selectedPost) {
    return (
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
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaCalendar className="mr-2" />
                  <span>{formatDate(selectedPost.publishedDate)}</span>
                </div>
              </header>
              
              <div className="max-w-none">
                {selectedPost.content ? (
                  documentToReactComponents(selectedPost.content, renderOptions)
                ) : (
                  <p className="text-gray-700">{selectedPost.excerpt || 'Content coming soon...'}</p>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // Show blog listing
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">
              {i18n.language === 'zh-TW' ? '載入中...' : 'Loading...'}
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {i18n.language === 'zh-TW' 
                ? '敬請期待我們的第一篇文章！' 
                : 'Stay tuned for our first blog post!'}
            </p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <FaCalendar className="mr-2" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || 'Click to read the full article...'}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-medium">
                    <span className="mr-2">
                      {i18n.language === 'zh-TW' ? '閱讀更多' : 'Read more'}
                    </span>
                    <FaArrowRight />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog