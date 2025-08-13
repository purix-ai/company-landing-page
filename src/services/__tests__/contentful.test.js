import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the contentful client before importing the module
vi.mock('contentful', () => {
  const mockGetEntries = vi.fn()
  return {
    createClient: vi.fn(() => ({
      getEntries: mockGetEntries
    }))
  }
})

// Import after mocking
import { getBlogPosts, getBlogPostBySlug, formatDate } from '../contentful'
import { createClient } from 'contentful'

describe('Contentful Service', () => {
  let mockGetEntries

  beforeEach(() => {
    // Get the mocked function
    mockGetEntries = createClient().getEntries
    vi.clearAllMocks()
  })

  describe('getBlogPosts', () => {
    it('fetches blog posts with correct parameters', async () => {
      const mockResponse = {
        items: [
          {
            sys: { id: '1' },
            fields: {
              title: 'Test Post',
              slug: 'test-post',
              content: { nodeType: 'document' },
              published: '2024-01-01',
              excerpt: 'Test excerpt'
            }
          }
        ]
      }

      mockGetEntries.mockResolvedValue(mockResponse)

      const posts = await getBlogPosts('en-US')

      expect(mockGetEntries).toHaveBeenCalledWith({
        content_type: 'wonderix-blog-post',
        locale: 'en-US',
        order: '-sys.createdAt'
      })

      expect(posts).toHaveLength(1)
      expect(posts[0]).toEqual({
        id: '1',
        title: 'Test Post',
        slug: 'test-post',
        content: { nodeType: 'document' },
        publishedDate: '2024-01-01',
        language: 'en-US',
        excerpt: 'Test excerpt'
      })
    })

    it('maps zh-TW locale to zh-Hant-TW', async () => {
      const mockResponse = { items: [] }
      mockGetEntries.mockResolvedValue(mockResponse)

      await getBlogPosts('zh-TW')

      expect(mockGetEntries).toHaveBeenCalledWith({
        content_type: 'wonderix-blog-post',
        locale: 'zh-Hant-TW',
        order: '-sys.createdAt'
      })
    })

    it('handles errors gracefully', async () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      
      mockGetEntries.mockRejectedValue(new Error('Network error'))

      const posts = await getBlogPosts('en-US')

      expect(posts).toEqual([])
      
      // Restore console.error
      consoleSpy.mockRestore()
    })
  })

  describe('getBlogPostBySlug', () => {
    it('fetches a single blog post by slug', async () => {
      const mockResponse = {
        items: [
          {
            sys: { id: '1' },
            fields: {
              title: 'Test Post',
              slug: 'test-post',
              content: { nodeType: 'document' },
              published: '2024-01-01',
              excerpt: 'Test excerpt'
            }
          }
        ]
      }

      mockGetEntries.mockResolvedValue(mockResponse)

      const post = await getBlogPostBySlug('test-post', 'en-US')

      expect(post).toEqual({
        id: '1',
        title: 'Test Post',
        slug: 'test-post',
        content: { nodeType: 'document' },
        publishedDate: '2024-01-01',
        language: 'en-US',
        excerpt: 'Test excerpt'
      })
    })

    it('returns null when post not found', async () => {
      const mockResponse = { items: [] }
      mockGetEntries.mockResolvedValue(mockResponse)

      const post = await getBlogPostBySlug('nonexistent-post', 'en-US')

      expect(post).toBeNull()
    })
  })

  describe('formatDate', () => {
    it('formats dates correctly', () => {
      const formatted = formatDate('2024-01-15T10:30:00Z')
      expect(formatted).toMatch(/January 15, 2024/)
    })

    it('handles invalid dates', () => {
      const formatted = formatDate('invalid-date')
      expect(formatted).toMatch(/Invalid Date/)
    })
  })
})