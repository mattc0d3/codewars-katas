const REGEXP = /^(?=[^a-z]*[a-z]+)(?=[^A-Z]*[A-Z]+)(?=\D*\d)\w{6,}$/g;

console.log(REGEXP.test("fjd3IR9")) // true
console.log(REGEXP.test("ghdfj32")) // false
console.log(REGEXP.test("DSJKHD23")) // false
console.log(REGEXP.test("dsF43")) // false
console.log(REGEXP.test("4fdg5Fj3")) // true
console.log(REGEXP.test("DHSJdhjsU")) // false
console.log(REGEXP.test("fjd3IR9.;")) // false
console.log(REGEXP.test("fjd3  IR9")) // false
console.log(REGEXP.test("djI38D55")) // true
console.log(REGEXP.test("djI3_8D55")) // false
console.log(REGEXP.test("djI38D55@@")) // false