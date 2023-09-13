const hookPath = `../src/hooks/use{{pascalCase name}}`
const templatePath = 'hook/template'

const actions = [
  {
    type: 'add',
    path: `${hookPath}/index.ts`,
    templateFile: `${templatePath}/hook.ts.hbs`
  },
  {
    type: 'add',
    path: `${hookPath}/__tests__/use{{pascalCase name}}.test.ts`,
    templateFile: `${templatePath}/test.ts.hbs`
  },
  {
    type: 'append',
    path: '../src/hooks/index.ts',
    template: "export { default as use{{pascalCase name}} } from './use{{pascalCase name}}'\n",
  }
]

export default actions
