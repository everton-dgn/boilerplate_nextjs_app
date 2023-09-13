const atomicDesignLayers = [
  {
    name: 'Atom',
    value: 'atoms'
  },
  {
    name: 'Molecule',
    value: 'molecules'
  },
  {
    name: 'Organism',
    value: 'organisms'
  },
  {
    name: 'Template',
    value: 'templates'
  }
]

const prompts = [
  {
    type: 'list',
    name: 'component_level',
    message: 'What is the level of your component?',
    choices: atomicDesignLayers
  },
  {
    type: 'input',
    name: 'name',
    message: 'Name of your component?'
  }
]

export default prompts
