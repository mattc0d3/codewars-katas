function validBraces(braces) {
    const counterparts = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const braceTracker = []
    for (let i = 0; i < braces.length; i++) {
        if (Object.keys(counterparts).includes(braces[i])) braceTracker.push(braces[i])
        else if (braces[i] === counterparts[braceTracker[braceTracker.length - 1]]) braceTracker.pop()
        else return false
    }
    return !braceTracker.length > 0
}

console.log(validBraces("()))")) // false
console.log(validBraces("()")) // true
console.log(validBraces("[]")) // true
console.log(validBraces("(){}[]")) // true
console.log(validBraces("([{}])")) // true
console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false
console.log(validBraces("({})[({})]")) // true
console.log(validBraces("(})")) // false
console.log(validBraces("(({{[[]]}}))")) // true
console.log(validBraces("{}({})[]")) // true
console.log(validBraces(")(}{][")) // false
console.log(validBraces("())({}}{()][][")) // false
console.log(validBraces("(((({{")) // false
console.log(validBraces("}}]]))}])")) // false
