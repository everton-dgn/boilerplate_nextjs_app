import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'

const meta = {
  args: {
    label: 'Button',
    onClick: () => ({})
  },
  component: Button,
  title: 'Atoms/Button'
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
