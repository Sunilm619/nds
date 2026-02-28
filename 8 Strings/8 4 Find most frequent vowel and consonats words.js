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
  console.log(keys, "keys");

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

let str = "successes";

let hash = {};
for (let i = 0; i < str.length; i++) {
  if (hash[str[i]]) {
    hash[str[i]]++;
  } else {
    hash[str[i]] = 1;
  }
}
let vowel = ["a", "e", "i", "o", "u"];
let maxvow = 0;
let maxcons = 0;
for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i])) {
    if (hash[str[i]] > maxvow) {
      maxvow = hash[str[i]];
    }
  } else {
    if (hash[str[i]] > maxcons) {
      maxcons = hash[str[i]];
    }
  }
}
console.log(maxcons + maxvow);
console.log(hash);
