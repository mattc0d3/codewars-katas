function add(a) {
    return (b) => {
        return (c) => {
            return a + b + c

        }
    }
}

console.log(add(1)) // 1
console.log(add(1)(2)) // 3
console.log(add(1)(2)(3)) // 6
// console.log(add(1)(2)(3)(4)) // 10
// console.log(add(1)(2)(3)(4)(5)) // 15

// test
