# Test Documentation for Purix Landing Page

This document provides guidance for writing and maintaining tests in the Purix landing page project.

## Test Infrastructure

### Test Runner
- **Vitest** - Fast unit test framework with Vite integration
- Configuration in `vite.config.js`
- Setup file: `src/test/setup.js`

### Test Utilities
Located in `src/test/testUtils.jsx`:
```javascript
import { render, screen, fireEvent, waitFor } from './test/testUtils'
```

The custom `render` function (alias for `renderWithProviders`) automatically wraps components with:
- `HelmetProvider` - For React Helmet Async (SEO meta tags)
- `MemoryRouter` - For React Router testing
- `I18nextProvider` - For internationalization

### Test Commands
```bash
npm run test           # Run tests in watch mode
npm run test:run       # Run tests once
npm run test:ui        # Run tests with UI interface
npm run test:coverage  # Run tests with coverage report (requires @vitest/coverage-v8)
```

## Writing Tests

### Component Test Template
```javascript
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../test/testUtils'
import YourComponent from './YourComponent'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Testing with Routing
```javascript
// Provide initial route
render(<YourComponent />, { initialEntries: ['/blog'] })

// Test navigation
const link = screen.getByRole('link', { name: /home/i })
fireEvent.click(link)
```

### Testing Async Operations
```javascript
it('loads data', async () => {
  render(<YourComponent />)
  
  // Wait for async operation
  await waitFor(() => {
    expect(screen.getByText('Loaded Content')).toBeInTheDocument()
  })
})
```

## Mocking Strategies

### Mocking Contentful Service
```javascript
vi.mock('../services/contentful', () => ({
  getBlogPosts: vi.fn().mockResolvedValue([
    { id: '1', title: 'Test Post', excerpt: 'Test excerpt' }
  ]),
  formatDate: vi.fn((date) => 'January 1, 2024')
}))
```

### Mocking React Components
```javascript
vi.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: vi.fn(() => <div>Rendered content</div>)
}))
```

### Clearing Mocks
```javascript
beforeEach(() => {
  vi.clearAllMocks()
})
```

## Common Testing Patterns

### Testing Loading States
```javascript
it('shows loading state', () => {
  // Mock service to never resolve
  getBlogPosts.mockReturnValue(new Promise(() => {}))
  render(<Blog />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})
```

### Testing Error States
```javascript
it('handles errors', async () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  getBlogPosts.mockRejectedValue(new Error('Failed'))
  
  render(<Blog />)
  
  await waitFor(() => {
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
  
  consoleSpy.mockRestore()
})
```

### Testing SEO Components
```javascript
it('sets correct meta tags', () => {
  render(<HomePage />)
  // Meta tags are handled by React Helmet Async
  // Test that SEO component is rendered with correct props
})
```

### Testing Internationalization
```javascript
it('displays correct language', () => {
  render(<Component />)
  expect(screen.getByText('English Text')).toBeInTheDocument()
  
  // Change language if needed
  // i18n.changeLanguage('zh-TW')
})
```

## Test File Organization

```
src/
├── __tests__/           # Integration tests
│   └── App.test.jsx     # App-level integration tests
├── components/
│   └── __tests__/       # Component unit tests
│       ├── Blog.test.jsx
│       ├── Header.test.jsx
│       └── Hero.test.jsx
├── services/
│   └── __tests__/       # Service unit tests
│       └── contentful.test.js
└── test/                # Test utilities and setup
    ├── CLAUDE.md        # This file
    ├── setup.js         # Test environment setup
    └── testUtils.jsx    # Custom render and utilities
```

## Environment Setup

### Mock Environment Variables
Set in `src/test/setup.js`:
```javascript
process.env.VITE_CONTENTFUL_SPACE_ID = 'test-space-id'
process.env.VITE_CONTENTFUL_ACCESS_TOKEN = 'test-access-token'
```

### Mock Browser APIs
```javascript
// Mock scrollIntoView
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
```

## Best Practices

1. **Clear mocks between tests** - Use `beforeEach(() => vi.clearAllMocks())`
2. **Test user behavior, not implementation** - Focus on what users see and do
3. **Use semantic queries** - Prefer `getByRole`, `getByLabelText` over `getByTestId`
4. **Handle async properly** - Always use `waitFor` for async operations
5. **Mock external dependencies** - Don't make real API calls in tests
6. **Test error cases** - Include tests for error states and edge cases
7. **Keep tests focused** - One test should verify one behavior
8. **Use descriptive test names** - Test names should explain what is being tested

## Debugging Tests

### Run single test file
```bash
npm run test:run src/components/__tests__/Blog.test.jsx
```

### Run tests matching pattern
```bash
npm run test:run -- -t "Blog"
```

### Debug in VS Code
Add to `.vscode/launch.json`:
```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Vitest Tests",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "test:run"],
  "console": "integratedTerminal"
}
```

## Common Issues and Solutions

### Act() Warnings
These warnings indicate state updates outside React's act():
- Usually safe to ignore in integration tests
- Can wrap state-changing code in `act()` if needed

### HelmetProvider Errors
Ensure all components using React Helmet are wrapped with HelmetProvider:
- Use the custom `render` function from `testUtils.jsx`
- Don't use `@testing-library/react` render directly

### Router Errors
Components using React Router hooks need router context:
- Use the custom `render` function which provides MemoryRouter
- Pass `initialEntries` option to set the initial route

### Async Test Timeouts
Default timeout is 5000ms. Increase if needed:
```javascript
it('long running test', async () => {
  // test code
}, 10000)
```

## Adding New Tests

When adding new features:
1. Write tests first (TDD) or immediately after implementation
2. Test the happy path and error cases
3. Test edge cases and boundary conditions
4. Ensure tests are independent and can run in any order
5. Update this documentation if you add new testing patterns

## Test Coverage Goals

Aim for:
- **80%+ code coverage** for critical paths
- **100% coverage** for utility functions
- **Key user flows** fully tested
- **Error handling** thoroughly tested
- **SEO components** rendering correctly

Run coverage report:
```bash
npm run test:coverage
```

## Continuous Integration

Tests run automatically on:
- Every push to main branch
- Every pull request
- GitHub Actions workflow in `.github/workflows/deploy.yml`

Tests must pass before deployment to production.