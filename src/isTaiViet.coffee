REGEX = /^[\uAA80-\uAAC2\uAADB-\uAADF]+$/

isTaiViet = (value) ->
  return REGEX.test value

module.exports = isTaiViet