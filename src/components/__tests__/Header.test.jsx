import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../../test/testUtils'
import Header from '../Header'

// Mock React Router hooks
const mockNavigate = vi.fn()
const mockLocation = { pathname: '/' }

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  }
})

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Wonderix Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()

    // Check for desktop navigation
    expect(screen.getByLabelText('Blog (desktop navigation)')).toBeInTheDocument()
    expect(screen.getByLabelText('Join waitlist (desktop navigation)')).toBeInTheDocument()

    // Check for mobile menu toggle button
    expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument()
  })

  it('scrolls to sections when on home page', () => {
    // Mock getElementById to return a mock element
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Header />)
    
    const featuresButton = screen.getByText('Features')
    fireEvent.click(featuresButton)
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('navigates to home then scrolls when on blog page', async () => {
    // Mock being on blog page
    mockLocation.pathname = '/blog'
    
    // Mock getElementById to return a mock element
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Header />)
    
    const featuresButton = screen.getByText('Features')
    fireEvent.click(featuresButton)
    
    // Should navigate to home page first
    expect(mockNavigate).toHaveBeenCalledWith('/')
    
    // Wait for setTimeout to complete and check scroll
    await waitFor(() => {
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    }, { timeout: 200 })
  })

  it('blog link navigates to /blog', () => {
    render(<Header />)
    
    const blogLinks = screen.getAllByText('Blog')
    expect(blogLinks[0]).toHaveAttribute('href', '/blog')
  })

  it('toggles mobile navigation menu', () => {
    render(<Header />)

    // Mobile menu should not be visible initially
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()

    // Click the hamburger menu button
    const menuToggle = screen.getByLabelText('Toggle mobile menu')
    fireEvent.click(menuToggle)

    // Mobile menu should now be visible with all links
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()

    // All navigation items should be in the mobile menu
    const allFeatures = screen.getAllByText('Features')
    const allHowItWorks = screen.getAllByText('How It Works')
    const allBlogs = screen.getAllByText('Blog')

    expect(allFeatures.length).toBeGreaterThanOrEqual(2) // Desktop + Mobile
    expect(allHowItWorks.length).toBeGreaterThanOrEqual(2) // Desktop + Mobile
    expect(allBlogs.length).toBeGreaterThanOrEqual(2) // Desktop + Mobile
  })

  it('handles missing sections gracefully', () => {
    // Mock getElementById to return null (section doesn't exist)
    vi.spyOn(document, 'getElementById').mockReturnValue(null)

    render(<Header />)
    
    const featuresButton = screen.getByText('Features')
    
    // Should not throw error when element doesn't exist
    expect(() => fireEvent.click(featuresButton)).not.toThrow()
  })
})