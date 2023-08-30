function rgb(r, g, b) {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    let hexConversion = ""
    const rgbValues = [r, g, b]

    rgbValues.forEach(value => {
        if (value < 0) value = 0
        else if (value > 255) value = 255
        hexConversion += hexValues[Math.floor(value / 16)]
        hexConversion += hexValues[value % 16]
    })
    return hexConversion
}

console.log(rgb(0, 0, 0)) // '000000'
console.log(rgb(0, 0, -20)) // '000000'
console.log(rgb(255, 255, 255)) // 'FFFFFF'
console.log(rgb(300, 255, 255)) // 'FFFFFF'
console.log(rgb(173, 255, 47)) // 'ADFF2F'
console.log(rgb(148, 0, 211)) // '9400D3'
