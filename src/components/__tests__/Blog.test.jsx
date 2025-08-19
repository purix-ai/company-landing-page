import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../../test/testUtils'
import Blog from '../Blog'

// Mock Contentful service
vi.mock('../../services/contentful', () => ({
  getBlogPosts: vi.fn(),
  formatDate: vi.fn((date) => 'January 1, 2024'),
}))

// Mock rich text renderer
vi.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: vi.fn((content) => <div>Rendered content</div>),
}))

import { getBlogPosts } from '../../services/contentful'

describe('Blog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading state initially', () => {
    getBlogPosts.mockReturnValue(new Promise(() => {})) // Never resolves
    
    render(<Blog />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('displays blog posts when loaded', async () => {
    const mockPosts = [
      {
        id: '1',
        title: 'Test Blog Post',
        excerpt: 'This is a test excerpt',
        publishedDate: '2024-01-01',
        content: { nodeType: 'document', content: [] }
      }
    ]
    
    getBlogPosts.mockResolvedValue(mockPosts)
    
    render(<Blog />)
    
    await waitFor(() => {
      expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
      expect(screen.getByText('This is a test excerpt')).toBeInTheDocument()
      expect(screen.getByText('Read more')).toBeInTheDocument()
    })
  })

  it('shows error message when fetch fails', async () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    getBlogPosts.mockRejectedValue(new Error('Failed to fetch'))
    
    render(<Blog />)
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load blog posts')).toBeInTheDocument()
    })
    
    // Restore console.error
    consoleSpy.mockRestore()
  })

  it('shows empty state when no posts', async () => {
    getBlogPosts.mockResolvedValue([])
    
    render(<Blog />)
    
    await waitFor(() => {
      expect(screen.getByText('Stay tuned for our first blog post!')).toBeInTheDocument()
    })
  })

  it('renders blog post links correctly', async () => {
    const mockPosts = [
      {
        id: '1',
        title: 'Test Blog Post',
        excerpt: 'This is a test excerpt',
        publishedDate: '2024-01-01',
        slug: 'test-blog-post'
      }
    ]
    
    getBlogPosts.mockResolvedValue(mockPosts)
    
    render(<Blog />)
    
    await waitFor(() => {
      const postLink = screen.getByRole('link', { name: /Test Blog Post/i }).closest('a')
      expect(postLink).toHaveAttribute('href', '/blog/test-blog-post')
    })
  })

  it('renders blog post links without slug using id', async () => {
    const mockPosts = [
      {
        id: '123',
        title: 'Test Blog Post Without Slug',
        excerpt: 'This is a test excerpt',
        publishedDate: '2024-01-01'
        // No slug field
      }
    ]
    
    getBlogPosts.mockResolvedValue(mockPosts)
    
    render(<Blog />)
    
    await waitFor(() => {
      const postLink = screen.getByRole('link', { name: /Test Blog Post Without Slug/i }).closest('a')
      expect(postLink).toHaveAttribute('href', '/blog/123')
    })
  })

  it('displays multiple blog posts', async () => {
    const mockPosts = [
      {
        id: '1',
        title: 'First Post',
        excerpt: 'First excerpt',
        publishedDate: '2024-01-01'
      },
      {
        id: '2',
        title: 'Second Post',
        excerpt: 'Second excerpt',
        publishedDate: '2024-01-02'
      }
    ]
    
    getBlogPosts.mockResolvedValue(mockPosts)
    
    render(<Blog />)
    
    await waitFor(() => {
      expect(screen.getByText('First Post')).toBeInTheDocument()
      expect(screen.getByText('Second Post')).toBeInTheDocument()
      expect(screen.getAllByText('Read more')).toHaveLength(2)
    })
  })

  it('shows excerpt when content is not available', async () => {
    const mockPosts = [
      {
        id: '1',
        title: 'Test Blog Post',
        excerpt: 'This is a test excerpt',
        publishedDate: '2024-01-01',
        content: null
      }
    ]
    
    getBlogPosts.mockResolvedValue(mockPosts)
    
    render(<Blog />)
    
    await waitFor(() => {
      expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
      expect(screen.getByText('This is a test excerpt')).toBeInTheDocument()
    })
  })
})