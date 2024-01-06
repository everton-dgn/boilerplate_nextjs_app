import { userEvent } from '@testing-library/user-event'

export const event = () => userEvent.setup({ delay: null })
