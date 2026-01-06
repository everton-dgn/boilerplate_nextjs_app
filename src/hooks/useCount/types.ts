export type UseCount = {
  count: number
  increment: () => void
  reset: () => void
  error: string | null
}
