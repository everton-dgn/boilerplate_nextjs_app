import { Meta, StoryObj } from '@storybook/react'
import Button from '..'

const meta: Meta<typeof Button> = {
  argTypes: {
    onClick: { action: 'onClick' }
  },
  args: {
    text: 'Click Here'
  },
  component: Button,
  title: 'Atoms/Button'
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {}
