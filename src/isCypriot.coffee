REGEX = ///^(?:\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F]
|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F])+$///

isCypriot = (value) ->
  return REGEX.test value

module.exports = isCypriot