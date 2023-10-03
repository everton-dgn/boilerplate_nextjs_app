import type { Preview } from '@storybook/react'
import viewports from './viewports'
import '../src/theme/reset.scss'
import './style.scss'
import MainProvider from '../src/providers/mainProvider'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MainProvider>
        <Story />
      </MainProvider>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'dark'
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
