'use strict'

var paris = require('../lib')
var expect = require('chai').expect

describe('paris', function () {
  it('converts array to new array of pairs of values', function () {
    expect(paris([1, 2, 3, 4, 5]))
      .to.deep.equal([[1, 2], [2, 3], [3, 4], [4, 5]])
  })

  it('returns empty array if array is empty', function () {
    expect(paris([])).to.deep.equal([])
  })

  it('returns empty array if array has only one element', function () {
    expect(paris([1])).to.deep.equal([])
  })
})
