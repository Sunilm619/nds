// let words = ["aaa", "abc", "dd", "dea"];

// let arr = [];

// for (i = 0; i < words.length; i++) {
//   console.log(i);

//   console.log(words[i]);
//   if (words[i].includes("a")) {
//     arr.push(i);
//     // console.log(i);
//   }

//   for (let j = 0; j < words[i].length; j++) {
//     if (words[i][j] === "a") {
//       arr.push(i);
//       break
//     }
//   }
// }
// console.log(arr);

// let jwl = "aA";
// let sto = "aAAnDN";
// let hash = new Set();
// let c = 0;
// for (let i = 0; i < jwl.length; i++) {
//   hash.add(jwl[i]);
// }

// console.log(hash);

// for (let j = 0; j < sto.length; j++) {
//   // console.log(hash)
//   if (hash.has(sto[j])) {
//     ++c;
//   }
// }

// console.log(c);
////O(n) time O(1) space
// let c = 0;
// for (let i = 0; i < sto.length; i++) {
//   for (let j = 0; j < jwl.length; j++) {
//     if (sto[i] === jwl[j]) {
//       ++c;
//       break;
//     }
//   }
// }

// console.log(c);

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
console.log(maxcons+maxvow)
console.log(hash);
