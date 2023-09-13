const componentPath = `../src/components/{{component_level}}/{{pascalCase name}}`
const templatePath = 'component/template'

const actions = [
  {
    type: 'add',
    path: `${componentPath}/index.tsx`,
    templateFile: `${templatePath}/component.tsx.hbs`
  },
  {
    type: 'add',
    path: `${componentPath}/styles.module.scss`,
    templateFile: `${templatePath}/styles.module.scss.hbs`
  },
  {
    type: 'add',
    path: `${componentPath}/storybook/stories.tsx`,
    templateFile: `${templatePath}/stories.tsx.hbs`
  },
  {
    type: 'add',
    path: `${componentPath}/__tests__/{{pascalCase name}}.test.tsx`,
    templateFile: `${templatePath}/test.tsx.hbs`
  },
  {
    type: 'add',
    path: `${componentPath}/types.ts`,
    templateFile: `${templatePath}/types.ts.hbs`
  },
  {
    type: 'append',
    path: '../src/components/{{component_level}}/index.tsx',
    template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}'\n",
  }
]

export default actions
