function solution(str, ending){
    const regexpSpecialChars = /([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!])/gi
    const escapedEnding = ending.replace(regexpSpecialChars, '\\$1')
    const endingChecker = new RegExp(escapedEnding + "$")
    return endingChecker.test(str)
  }

console.log(solution('abcde', 'cde')) // true
console.log(solution('abcde3', 'abc')) // false
console.log(solution('abcde3', ':-(')) // false
