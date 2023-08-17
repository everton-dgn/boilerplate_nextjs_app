export const mockedPush = jest.fn()
export const mockedPrefetch = jest.fn()

jest.mock('next/router', () => ({
  useRouter: () => ({
    prefetch: mockedPrefetch,
    push: mockedPush
  })
}))
