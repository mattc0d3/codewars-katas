function duplicateCount(text) {
    const seen = {}
    const counted = {}
    let count = 0
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase()
        if (!seen[char]) seen[char] = true
        else if (!counted[char]) {
            count++
            counted[char] = true
        }
    }
    return count
}

console.log(duplicateCount("abcde")) // 0
console.log(duplicateCount("aabbcde")) // 2
console.log(duplicateCount("aabBcde")) // 2
console.log(duplicateCount("indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2
console.log(duplicateCount("aA11")) // 2
console.log(duplicateCount("ABBA")) // 2