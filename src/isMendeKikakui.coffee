REGEX = /^(?:\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6])+$/

isMendeKikakui = (value) ->
  return REGEX.test value

module.exports = isMendeKikakui