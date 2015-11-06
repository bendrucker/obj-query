'use strict'

var isObject = require('is-plain-obj')
var reduce = require('object.reduce')
var map = require('map-obj')
var pair = require('object-pair')
var assign = require('xtend/mutable')
var stringify = require('print-value')

module.exports = function objectQuery (obj) {
  return isObject(obj) ? format(obj) : obj
}

function format (obj) {
  return reduce(obj, function (acc, value, key) {
    var flat = isObject(value) ? flatten : pair
    return assign(acc, flat(key, value))
  }, {})
}

function flatten (parentKey, value) {
  return map(value, function (key, value) {
    return [parentKey + '[' + key + ']', stringify(value)]
  })
}
