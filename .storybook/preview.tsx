import type { Preview } from '@storybook/react'
import viewports from './viewports'
import '../src/theme/reset.scss'
import './style.css'
import { MainProvider } from '../src/providers/mainProvider'
import poppins from '../src/theme/fontFamily'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={poppins.className}>
        <MainProvider>
          <Story />
        </MainProvider>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'light'
    },
    viewport: {
      viewports
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'centered'
  }
}

export default preview
