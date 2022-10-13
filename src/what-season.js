const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let name
  if (!date) return 'Unable to determine the time of year!'

  if (date instanceof Date) {
    if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')

    const season = [
      { name: 'winter', months: [11, 0, 1] },
      { name: 'summer', months: [5, 6, 7] },
      { name: 'autumn', months: [8, 9, 10] },
      { name: 'spring', months: [2, 3, 4] },
    ]

    season.forEach((item) => {
      if (item.months.includes(date.getMonth())) {
        name = item.name
      }
    })

    return name
  } else {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
}
