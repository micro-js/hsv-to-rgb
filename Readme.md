
# hsv-to-rgb

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert an HSV color to RGB

## Installation

    $ npm install @f/hsv-to-rgb

## Usage

```js
var hsvToRgb = require('@f/hsv-to-rgb')

hsvToRgb(74, 0.19, 0.41) // -> [100, 105, 85]
```

## API

### hsvToRgb(hue, saturation, value)

- `hue` - Hue expressed as an integer between 0 and 360.
- `saturation` - Saturation expressed as a floating point between 0 and 1.
- `value` - Value (aka Brightness) expressed as a floating point between 0 and 1.

**Returns:** An array containing `[red, green, blue]` values that correspond to the HSV color you specified.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/hsv-to-rgb.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/hsv-to-rgb
[git-image]: https://img.shields.io/github/tag/micro-js/hsv-to-rgb.svg
[git-url]: https://github.com/micro-js/hsv-to-rgb
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/hsv-to-rgb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/hsv-to-rgb
