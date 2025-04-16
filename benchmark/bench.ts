import { Bench } from 'tinybench'

import { hasFiles, getFiles, hasHtml, hasImage, hasRtf, hasText } from '../index.js'

function fnHasFiles(): boolean {
  return hasFiles()
}

function fnHasHtml(): boolean {
  return hasHtml()
}

function fnHasImage(): boolean {
  return hasImage()
}

function fnHasRtf(): boolean {
  return hasRtf()
}

function fnHasText(): boolean {
  return hasText()
}

function fnGetFiles(): object {
  return getFiles()
}

const b = new Bench()

b.add('has files', () => {
  fnHasFiles()
})

b.add('has html', () => {
  fnHasHtml()
})

b.add('has image', () => {
  fnHasImage()
})

b.add('has rtf', () => {
  fnHasRtf()
})

b.add('has test', () => {
  fnHasText()
})

b.add('get files', () => {
  fnGetFiles()
})

await b.run()

console.table(b.table())
