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

  it('opens individual post when clicked', async () => {
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
      const postCard = screen.getByText('Test Blog Post').closest('article')
      fireEvent.click(postCard)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Back to Blog')).toBeInTheDocument()
      expect(screen.getByText('Rendered content')).toBeInTheDocument()
    })
  })

  it('goes back to blog list from individual post', async () => {
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
    
    // Click on post
    await waitFor(() => {
      const postCard = screen.getByText('Test Blog Post').closest('article')
      fireEvent.click(postCard)
    })
    
    // Click back button
    await waitFor(() => {
      const backButton = screen.getByText('Back to Blog')
      fireEvent.click(backButton)
    })
    
    // Should be back to list view
    await waitFor(() => {
      expect(screen.getByText('Read more')).toBeInTheDocument()
    })
  })

  it('displays content when available', async () => {
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
      const postCard = screen.getByText('Test Blog Post').closest('article')
      fireEvent.click(postCard)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Rendered content')).toBeInTheDocument()
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
      const postCard = screen.getByText('Test Blog Post').closest('article')
      fireEvent.click(postCard)
    })
    
    await waitFor(() => {
      expect(screen.getByText('This is a test excerpt')).toBeInTheDocument()
    })
  })
})