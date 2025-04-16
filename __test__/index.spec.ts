import test from 'ava'

import { hasFiles, getFiles, hasHtml, hasImage, hasRtf, hasText, getText, getHtml, getRtf } from '../index'

test('has files', (t) => {
  t.is(typeof hasFiles(), 'boolean')
})

test('has html', (t) => {
  t.is(typeof hasHtml(), 'boolean')
})

test('has image', (t) => {
  t.is(typeof hasImage(), 'boolean')
})

test('has rtf', (t) => {
  t.is(typeof hasRtf(), 'boolean')
})

test('has text', (t) => {
  t.is(typeof hasText(), 'boolean')
})

test('get files', (t) => {
  t.is(typeof getFiles(), 'object')
})

test('get text', (t) => {
  t.is(typeof getText(), 'string')
})

test('get rtf', (t) => {
  t.is(typeof getRtf(), 'string')
})

test('get html', (t) => {
  t.is(typeof getHtml(), 'string')
})
