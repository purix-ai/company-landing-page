import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getBlogPosts, formatDate } from '../services/contentful'
import { FaCalendar, FaArrowRight } from 'react-icons/fa'
import SEO from './SEO'

const Blog = () => {
  const { t, i18n } = useTranslation()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
  return (
    <>
      <SEO
        title="Blog | Wonderix - Educational Game Creation Insights"
        description="Explore articles about AI-powered educational game creation, teaching strategies, and the future of game-based learning with Wonderix."
        keywords="educational games blog, AI education articles, game-based learning insights, edtech blog, Wonderix blog, teaching resources"
        url="https://www.wonderix.app/blog"
      />
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {loading && (
          <div className="text-center py-12">
            <div 
              className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"
              role="progressbar"
              aria-label={i18n.language === 'zh-TW' ? '正在載入部落格文章' : 'Loading blog posts'}
            ></div>
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
              <Link 
                key={post.id}
                to={`/blog/${post.slug || post.id}`}
                className="block"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Blog