import { screen, act } from '@testing-library/react'
import { event } from 'tests/helpFunctions'
import { renderWithProviders } from 'tests/providers'

import Home from '../page'

describe('[Page] Home', () => {
  it('should render a page with a title, two images and a button', () => {
    renderWithProviders(<Home />)

    const logoNextjs = screen.getByRole('img', {
      name: /logo nextjs/i
    })
    const logoReact = screen.getByRole('img', {
      name: /logo react/i
    })
    const title = screen.getByRole('heading', {
      name: 'Nextjs + React'
    })
    const button = screen.getByRole('button', {
      name: 'COUNT: 0'
    })

    expect(logoNextjs).toBeInTheDocument()
    expect(logoReact).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('should render count in button when clicked', async () => {
    renderWithProviders(<Home />)

    const countButton0 = screen.getByRole('button', {
      name: 'COUNT: 0'
    })
    await act(async () => {
      await event().click(countButton0)
    })
    const countButton1 = screen.getByRole('button', {
      name: 'COUNT: 1'
    })

    expect(countButton1).toBeInTheDocument()

    await act(async () => {
      await event().click(countButton1)
    })
    const countButton2 = screen.getByRole('button', {
      name: 'COUNT: 2'
    })

    expect(countButton2).toBeInTheDocument()
  })
})
