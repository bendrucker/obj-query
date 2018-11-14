'use strict'

var test = require('tape')
var query = require('./')

test(function (t) {
  t.deepEquals(query({ foo: 'bar', bar: { baz: 'qux' } }), {
    foo: 'bar',
    'bar[baz]': 'qux'
  })
  t.deepEquals(query({ foo: 'bar', bar: { baz1: 'qux1', baz2: 'qux2' } }), {
    foo: 'bar',
    'bar[baz1]': 'qux1',
    'bar[baz2]': 'qux2'
  })
  t.deepEquals(query({ foo: 'bar', bar: { baz1: 'qux1', baz2: 'qux2' } }), {
    foo: 'bar',
    'bar[baz1]': 'qux1',
    'bar[baz2]': 'qux2'
  })
  t.deepEquals(query({ foo: { bar: { baz: 1 } } }), {
    'foo[bar]': '{"baz":1}'
  })

  t.end()
})
