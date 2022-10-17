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
    const index = position - 1

    if (this.result[index] === undefined) {
      this.result = []
      throw new Error("You can't remove incorrect link!")
    }
    this.result.splice(index, 1)
    return chainMaker
  },
  reverseChain() {
    this.result.reverse()
    return chainMaker
  },
  finishChain() {
    const res = this.result.join('~~')
    this.result = []
    return res
  },
}

module.exports = {
  chainMaker,
}
