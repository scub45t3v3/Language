REGEX = /^[\u1735\u1736\u1740-\u1753]+$/

isBuhid = (value) ->
  return REGEX.test value

module.exports = isBuhid