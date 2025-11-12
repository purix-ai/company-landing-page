import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../test/testUtils'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />)

    expect(screen.getByText('Introducing Wonderix')).toBeInTheDocument()
    expect(screen.getByText(/Create Engaging and Effective/)).toBeInTheDocument()
    expect(screen.getByText('Educational Games')).toBeInTheDocument()
    expect(screen.getByText(/Stop forcing kids to memorize/)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Hero />)

    const joinButtons = screen.getAllByText('Join Founding Family Program')
    expect(joinButtons.length).toBeGreaterThan(0)

    // Check that at least one button exists (demo might be hidden)
    expect(joinButtons[0]).toBeInTheDocument()
  })

  it('renders stats section', () => {
    render(<Hero />)

    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('Learning Effectiveness Boost')).toBeInTheDocument()
    expect(screen.getByText('7x')).toBeInTheDocument()
    expect(screen.getByText('More Active Learning Time')).toBeInTheDocument()
  })

  it('join waitlist button scrolls to waitlist section', () => {
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    render(<Hero />)

    const joinButton = screen.getAllByText('Join Founding Family Program')[0]
    fireEvent.click(joinButton)

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('handles missing waitlist section gracefully', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null)

    render(<Hero />)

    const joinButton = screen.getAllByText('Join Founding Family Program')[0]

    expect(() => fireEvent.click(joinButton)).not.toThrow()
  })
})