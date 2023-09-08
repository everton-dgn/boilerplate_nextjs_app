import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600']
})

export default poppins
