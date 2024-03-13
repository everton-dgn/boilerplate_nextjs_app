import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/storybook/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {}
    }
  },
  docs: {
    autodocs: true
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen'
  }
}
export default config
