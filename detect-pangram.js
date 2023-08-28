function isPangram(string){
    const seen = {}
    string.split("").forEach(char => {
        if (/[a-z]/i.test(char) && !seen[char.toLowerCase()]) {
            seen[char.toLowerCase()] = true
        }
    })
    return Object.keys(seen).length === 26
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This sentence is not a pangram."))