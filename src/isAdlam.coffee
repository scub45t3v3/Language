REGEX = /^(?:\u0640|\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F])+$/

isAdlam = (value) ->
  return REGEX.test value

module.exports = isAdlam