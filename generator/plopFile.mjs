import hooks from './hook/plopFile.mjs'
import components from './component/plopFile.mjs'

const generate = plop => {
  plop.setWelcomeMessage('Welcome to the plop generator! Select an option below:')

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: components(plop).prompts,
    actions: components(plop).actions
  })

  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts: hooks(plop).prompts,
    actions: hooks(plop).actions
  })
}

export default generate
