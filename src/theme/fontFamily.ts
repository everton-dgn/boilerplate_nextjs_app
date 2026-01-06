import { Inter } from 'next/font/google'

// System font stack fallback for when Google Fonts fail to load
export const FALLBACK_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

let inter: ReturnType<typeof Inter>

try {
  inter = Inter({
    variable: '--font-inter',
    display: 'swap',
    subsets: ['latin-ext'],
    weight: ['400', '500', '600'],
    fallback: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ]
  })
} catch {
  // Create a fallback font object that mimics the Inter font structure
  inter = {
    className: '',
    variable: '--font-inter',
    style: { fontFamily: FALLBACK_FONT_STACK }
  } as ReturnType<typeof Inter>
}

export default inter
