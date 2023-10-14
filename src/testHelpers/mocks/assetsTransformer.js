import { basename } from 'node:path'

export function process(sourceText, sourcePath) {
  return {
    code: `module.exports = ${JSON.stringify(basename(sourcePath))};`
  }
}
