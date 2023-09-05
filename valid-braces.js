function validBraces(braces){

    const bracesCount = {
        "(": 0,
        ")": 0,
        "[": 0,
        "]": 0,
        "{": 0,
        "}": 0
    }

    for (let i = 0; i < braces.length; i++) {
        bracesCount[braces[i]]++
        if (braces[i] === ")" && (bracesCount["["] > bracesCount["]"] || bracesCount["{"] > bracesCount["}"])) return false
        else if (braces[i] === "]" && (bracesCount["("] > bracesCount[")"] || bracesCount["{"] > bracesCount["}"])) return false
        else if (braces[i] === "}" && (bracesCount["("] > bracesCount[")"] || bracesCount["["] > bracesCount["]"])) return false
    }

    if (bracesCount["("] !== bracesCount[")"] || bracesCount["["] !== bracesCount["]"] || bracesCount["{"] !== bracesCount["}"]) {
        return false
    }

    return true
}

// console.log(validBraces("()))")) // false
// console.log(validBraces("()")) // true
// console.log(validBraces("[]")) // true
// console.log(validBraces("(){}[]")) // true
console.log(validBraces("([{}])")) // true
// console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false
// console.log(validBraces("({})[({})]")) // true
// console.log(validBraces("(})")) // false
// console.log(validBraces("(({{[[]]}}))")) // true
// console.log(validBraces("{}({})[]")) // true
// console.log(validBraces(")(}{][")) // false
// console.log(validBraces("())({}}{()][][")) // false
// console.log(validBraces("(((({{")) // false
// console.log(validBraces("}}]]))}])")) // false
