function count(string) {
    const charCount = {}
    for (let i = 0; i < string.length; i++) {
        if (!charCount[string[i]]) charCount[string[i]] = 1
        else charCount[string[i]]++
    }
    return charCount;
}

console.log(count('')) // {}
console.log(count('a')) // {'a': 1}
console.log(count('ab')) // {'a': 1, 'b': 1}
console.log(count('aba')) // {'a': 2, 'b': 1}
console.log(count('ABC')) // {'A': 1, 'B': 1, 'C': 1}
