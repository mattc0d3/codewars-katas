function squareDigits(num) {
    const digitsArray = num.toString().split("")
    const squaredDigitsArray = digitsArray.map(digit => Number(digit) ** 2)
    return Number(squaredDigitsArray.join(""));
}

console.log(squareDigits(9119))
console.log(squareDigits(765))