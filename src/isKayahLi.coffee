REGEX = /^[\uA900-\uA92F]+$/

isKayahLi = (value) ->
  return REGEX.test value

module.exports = isKayahLi
