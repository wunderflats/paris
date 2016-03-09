'use strict'

module.exports = function paris (array) {
  return array.reduce(function (pairs, current, i, array) {
    if (i === array.length - 1) return pairs
    pairs.push([current, array[i + 1]])
    return pairs
  }, [])
}
