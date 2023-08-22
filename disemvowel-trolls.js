function disemvowel(str) {
  const vowelChecker = /[^ieauo]/g
  const noVowelsArray = str.match(vowelChecker)
  return noVowelsArray.join("");
}

disemvowel("hello world!")