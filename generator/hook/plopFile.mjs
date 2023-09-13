import actions from './actions.mjs'
import prompts from './prompts.mjs'

const hook = plop =>
  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts,
    actions
  })

export default hook
