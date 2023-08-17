import '../.jest/nextImageMock'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import { MainProviders } from 'ui/providers'

const customViewports = {
  MotoG4: {
    name: 'Moto G4',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  iphone12: {
    name: 'iPhone 12',
    styles: {
      height: '844px',
      width: '390px'
    },
    type: 'mobile'
  },
  desktop1: {
    name: 'HD Desktop',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  desktop2: {
    name: 'Full HD Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: 'centered',
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: '#000927',
      barBg: '#051542',
      appBg: '#051542',
      brandTitle: 'Boilerplate',
      brandUrl: '/',
      colorSecondary: '#1EA7FD',
      appBorderColor: '#ffffff26',
      fontCode: '#fff',
      textColor: '#fff',
      textMutedColor: '#ddd',
      barTextColor: '#fff',
      barSelectedColor: '#1EA7FD',
      inputBg: '#051542',
      inputBorder: '#ffffff26',
      inputTextColor: '#fff'
    }
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
  },
  backgrounds: {
    values: [
      { name: 'Black', value: '#000' },
      { name: 'White', value: '#fff' },
      { name: 'Light', value: '#f5f5ff' },
      { name: 'Dark', value: '#000927' },
      { name: 'DarkSmooth', value: '#051542' }
    ]
  }
}

export const decorators = [
  Story => (
    <MainProviders>
      <Story />
    </MainProviders>
  )
]
