import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../test/testUtils'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />)
    
    expect(screen.getByText('Introducing Wonderix')).toBeInTheDocument()
    expect(screen.getByText(/Build Educational Games with/)).toBeInTheDocument()
    expect(screen.getByText('AI in Minutes')).toBeInTheDocument()
    expect(screen.getByText(/Wonderix empowers teachers and parents/)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Hero />)
    
    const joinButtons = screen.getAllByText('Join the Waitlist')
    expect(joinButtons.length).toBeGreaterThan(0)
    
    // Check that at least one button exists (demo might be hidden)
    expect(joinButtons[0]).toBeInTheDocument()
  })

  it('renders stats section', () => {
    render(<Hero />)

    expect(screen.getByText('Coding Required')).toBeInTheDocument()
    expect(screen.getByText('AI-Powered')).toBeInTheDocument()
  })

  it('join waitlist button scrolls to waitlist section', () => {
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Hero />)
    
    const joinButton = screen.getAllByText('Join the Waitlist')[0]
    fireEvent.click(joinButton)
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('handles missing waitlist section gracefully', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null)

    render(<Hero />)
    
    const joinButton = screen.getAllByText('Join the Waitlist')[0]
    
    expect(() => fireEvent.click(joinButton)).not.toThrow()
  })
})