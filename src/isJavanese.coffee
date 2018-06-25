REGEX = /^[\uA980-\uA9CD\uA9CF-\uA9D9\uA9DE\uA9DF]+$/

isJavanese = (value) ->
  return REGEX.test value

module.exports = isJavanese