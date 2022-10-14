const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const pos = email.lastIndexOf('@')
  let domain

  if (pos) {
    if (email[pos + 1] === '.') {
      domain = email.slice(pos + 2, email.length)
    } else {
      domain = email.slice(pos + 1, email.length)
    }
  }
  return domain
}

module.exports = {
  getEmailDomain,
}
