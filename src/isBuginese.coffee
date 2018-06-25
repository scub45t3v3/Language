REGEX = /^[\u1A00-\u1A1B\u1A1E\u1A1F\uA9CF]+$/

isBuginese = (value) ->
  return REGEX.test value

module.exports = isBuginese