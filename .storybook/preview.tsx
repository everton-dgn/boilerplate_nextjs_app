import type { Preview } from '@storybook/react'
import viewports from './viewports'
import '../src/theme/reset.scss'
import './style.scss'

const preview: Preview = {
  parameters: {
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
