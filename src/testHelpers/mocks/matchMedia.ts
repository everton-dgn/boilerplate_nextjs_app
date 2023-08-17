const size = (size: number) => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    addEventListener: jest.fn(),
    addListener: jest.fn(),
    dispatchEvent: jest.fn(),
    matches: query === `(min-width: ${size}px)`,
    media: '',
    onchange: null,
    removeEventListener: jest.fn(),
    removeListener: jest.fn()
  }))
}

const object = {
  value: jest.fn().mockImplementation(() => ({})),
  writable: true
}

Object.defineProperty(window, 'matchMedia', object)

export default size
