REGEX = ///^(?:\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17
\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE50-\uDE58])+$///

isKharoshthi = (value) ->
  return REGEX.test value

module.exports = isKharoshthi
