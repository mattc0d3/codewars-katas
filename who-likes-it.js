function likes(names) {
    let start
    switch (names.length) {
        case 0:
            start = "no one"
            break
        case 1:
            start = names[0]
            break
        case 2:
            start = names[0] + " and " + names[1]
            break
        case 3:
            start = names[0] + ", " + names[1] + " and " + names[2]
            break
        default:
            start = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others"
    }
    const end = names.length > 1 ? " like this" : " likes this"
    return start + end
  }

console.log(likes([])) // "no one likes this"
console.log(likes(["Peter"])) // "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])) // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // "Alex, Jacob and 2 others like this"
