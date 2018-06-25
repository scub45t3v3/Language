REGEX = /^(?:\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF])+$/

isMeroiticCursive = (value) ->
  return REGEX.test value

module.exports = isMeroiticCursive