/**
 * Expose hsvToRgb
 */

module.exports = hsvToRgb

/**
 * hsvToRgb
 *
 * Adapted from: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */

function hsvToRgb (h, s, v) {
  h /= 360
  v = Math.round(v * 255)

  var i = Math.floor(h * 6)
  var f = h * 6 - i
  var p = Math.round(v * (1 - s))
  var q = Math.round(v * (1 - f * s))
  var t = Math.round(v * (1 - (1 - f) * s))

  switch (i % 6) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, b]
    case 5:
      return [v, p, q]
  }
}
