import type { Meta, StoryObj } from '@storybook/react'

import { Error } from '..'

const meta = {
  args: {
    reset: () => ({})
  },
  component: Error,
  title: 'Organisms/Error'
} satisfies Meta<typeof Error>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
