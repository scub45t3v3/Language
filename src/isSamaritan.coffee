REGEX = /^[\u0800-\u082D\u0830-\u083E]+$/

isSamaritan = (value) ->
  return REGEX.test value

module.exports = isSamaritan