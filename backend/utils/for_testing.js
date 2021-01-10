const logger = require('./logger')
const palindrome = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}
  
const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }
  const reducerl = (sum, item) => {
    return sum + item
  }
  array.reduce(reducer, 0)
  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length
}
logger.info(palindrome('abcdafa'))
  
module.exports = {
  palindrome,
  average,
}