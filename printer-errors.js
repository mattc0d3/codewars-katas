function printerError(s) {
    const validLetters = "abcdefghijklm"
    const errors = s.split("").filter(char => !validLetters.includes(char))
    return errors.length + "/" + s.length
}

console.log(printerError("aaabbbbhaijjjm")) // 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")) // 8/22
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")) // 3/56