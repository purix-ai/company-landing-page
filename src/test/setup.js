import '@testing-library/jest-dom'

// Mock environment variables for tests
process.env.VITE_CONTENTFUL_SPACE_ID = 'test-space-id'
process.env.VITE_CONTENTFUL_ACCESS_TOKEN = 'test-access-token'

// Mock window.scrollIntoView for tests
Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true,
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}