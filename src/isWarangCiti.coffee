REGEX = /^(?:\uD806[\uDCA0-\uDCF2\uDCFF])+$/

isWarangCiti = (value) ->
  return REGEX.test value

module.exports = isWarangCiti