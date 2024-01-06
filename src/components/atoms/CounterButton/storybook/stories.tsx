import type { Meta, StoryObj } from '@storybook/react'

import { CounterButton } from '..'

const meta = {
  component: CounterButton,
  title: 'Atoms/CounterButton'
} satisfies Meta<typeof CounterButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
