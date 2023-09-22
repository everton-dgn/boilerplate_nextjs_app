import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Get the file and project directories
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')
const HUSKY_DIR = path.join(PROJECT_ROOT, '.husky')

fs.existsSync(HUSKY_DIR)
  ? process.exit()
  : fs.mkdirSync(HUSKY_DIR, { recursive: true })

const getPrePushContent = `#!/usr/bin/env sh
. "$(dirname "$0")/common.sh"

npx --no-install

yarn test
yarn typecheck
yarn build
`

const getPreCommitContent = `#!/usr/bin/env sh
. "$(dirname "$0")/common.sh"

npx --no-install lint-staged
`

const getCommonShContent = `command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
`

const getCommitMsgContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
`

const files = {
  'pre-push': getPrePushContent,
  'pre-commit': getPreCommitContent,
  'common.sh': getCommonShContent,
  'commit-msg': getCommitMsgContent
}

const createFile = (filename, content) => {
  const filePath = path.join(HUSKY_DIR, filename)
  fs.writeFileSync(filePath, content)
  // Sets the execution permission for the file
  fs.chmodSync(filePath, 0o755)
}

for (const filename in files) {
  createFile(filename, files[filename])
}

process.stdout.write('\nHusky files have been successfully created!\n\n')
