import { Bench } from 'tinybench'

import { hasFiles, getFiles } from '../index.js'

function fnHasFiles(): boolean {
  return hasFiles()
}

function fnGetFiles(): object {
  return getFiles()
}

const b = new Bench()

b.add('has files', () => {
  fnHasFiles()
})

b.add('get files', () => {
  fnGetFiles()
})

await b.run()

console.table(b.table())
