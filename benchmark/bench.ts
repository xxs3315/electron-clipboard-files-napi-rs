import { Bench } from 'tinybench'

import { hasFiles, getFiles, hasHtml, hasImage, hasRtf, hasText, getText, getHtml, getRtf } from '../index.js'

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

function fnGetText(): string {
  return getText()
}

function fnGetRtf(): string {
  return getRtf()
}

function fnGetHtml(): string {
  return getHtml()
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

b.add('get text', () => {
  fnGetText()
})

b.add('get rtf', () => {
  fnGetRtf()
})

b.add('get html', () => {
  fnGetHtml()
})

await b.run()

console.table(b.table())
