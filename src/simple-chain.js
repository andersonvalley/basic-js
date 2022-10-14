const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length
  },
  addLink(value) {
    this.result.push(`( ${value} )`)
    return chainMaker
  },
  removeLink(position) {
    if (position <= 0 || position > this.result.length) throw new Error("You can't remove incorrect link!")

    if (typeof position === 'number') {
      this.result.splice(position - 1, 1)
      return chainMaker
    }
  },
  reverseChain() {
    this.result.reverse()
    return chainMaker
  },
  finishChain() {
    return String(chainMaker.result.join('~~'))
  },
}

module.exports = {
  chainMaker,
}
