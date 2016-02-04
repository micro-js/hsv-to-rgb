/**
 * Imports
 */

var hsvToRgb = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(hsvToRgb(74, 0.19, 0.41), [100, 105, 85])
  t.end()
})
