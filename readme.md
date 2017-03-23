# obj-query [![Build Status](https://travis-ci.org/bendrucker/obj-query.svg?branch=master)](https://travis-ci.org/bendrucker/obj-query)

> Convert a single-level nested object to a querystring compatible representation


## Install

```
$ npm install --save obj-query
```


## Usage

```js
var query = require('obj-query')

query({foo: 1, bar: {baz: 2}})
//=> {foo: 1, 'bar[baz]': 2}
```

## API

#### `query(obj)` -> `object`

##### obj

*Required*  
Type: `object`

An object to flatten (one level) into a querystring compatible format.


## See also

- [`qs`](https://github.com/ljharb/qs) – Safer & more feature-rich, but also contains a parser.
- [`q-flat`](https://github.com/DylanPiercey/q-flat) – Also encodes arrays.


## License

MIT © [Ben Drucker](http://bendrucker.me)
