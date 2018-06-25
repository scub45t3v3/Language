REGEX = /^(?:\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF])+$/

isHatran = (value) ->
  return REGEX.test value

module.exports = isHatran