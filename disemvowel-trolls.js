function disemvowel(str) {
  const vowelChecker = /[^ieauo]/g
  const noVowelsArray = str.match(vowelChecker)
  console.log(noVowelsArray, "<<<<<")
  return noVowelsArray.join("");
}