REGEX = /^(?:\uD801[\uDD30-\uDD63\uDD6F])+$/

isCaucasianAlbanian = (value) ->
  return REGEX.test value

module.exports = isCaucasianAlbanian