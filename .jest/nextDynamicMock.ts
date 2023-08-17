export const content = () => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
}

jest.isolateModules(content)
