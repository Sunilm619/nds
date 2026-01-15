function vowelcons(word) {
  let map = {};
  for (let i = 0; i < word.length; i++) {
    if (!map[word[i]]) {
      map[word[i]] = 1;
    } else {
      map[word[i]] += 1;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];

  let keys = Object.keys(map);
  let maxvow = 0;
  let maxcon = 0;
  // console.log(keys);

  for (let j = 0; j < keys.length; j++) {
    // console.log(map[keys[j]]);
    if (vowels.includes(keys[j])) {
      maxvow = Math.max(maxvow, map[keys[j]]);
      console.log(map[keys[j]]);
    } else {
      maxcon = Math.max(maxcon, map[keys[j]]);
      console.log(maxcon);
    }
  }
  return maxcon + maxvow;
}

let word = "aaeeuioklm";

let ans = vowelcons(word);
console.log(ans);
