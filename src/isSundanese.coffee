REGEX = /^[\u1B80-\u1BBF\u1CC0-\u1CC7]+$/

isSundanese = (value) ->
  return REGEX.test value

module.exports = isSundanese