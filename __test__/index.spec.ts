import test from 'ava'

import { hasFiles, getFiles } from '../index'

test('has files', (t) => {
  t.is(typeof hasFiles(), "boolean")
})

test('get files', (t) => {
  t.is(typeof getFiles(), "object")
})

