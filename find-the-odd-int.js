function findOdd(A) {
    const intCount = {}
    A.forEach(int => {
        if (!intCount[int]) intCount[int] = 1
        else intCount[int]++
    })
    for (let int in intCount) {
        if (intCount[int] % 2 !== 0) return Number(int)
    }
}

console.log(findOdd([7])) // 7
console.log(findOdd([0])) // 0
console.log(findOdd([1, 1, 2])) // 2
console.log(findOdd([0, 1, 0, 1, 0])) // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])) // 4
