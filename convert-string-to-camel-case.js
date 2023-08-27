function toCamelCase(str){
    if (!str) return str
    let camelCaseStr = ""
    const splitStr = str.split(/_|-/g)
    splitStr.forEach(word => camelCaseStr += word[0].toUpperCase() + word.slice(1))
    const firstLetter = str[0] === str[0].toLowerCase() ? str[0] : str[0].toUpperCase()
    return firstLetter + camelCaseStr.slice(1)
}

console.log(toCamelCase(""))
console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-stealth-warrior"))
