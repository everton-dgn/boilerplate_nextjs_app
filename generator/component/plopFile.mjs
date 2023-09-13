
import actions from './actions.mjs'
import prompts from './prompts.mjs'

const component = plop =>
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts,
    actions
  })

export default component
