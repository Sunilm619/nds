// let str = "LRLLRRLRLR";
// let nc = 0;
// let fc = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "L") {
//     ++nc;
//   } else if (str[i] === "R") {
//     --nc;
//   }
//   if (nc === 0) {
//     ++fc;
//   }
// }
// console.log(fc);

// let st = "abcdefg";
// st = st.split("");
// let k = 2;
// for (let i = 0; i < st.length; i = i + 2 * k) {
//   let tmp = st[i];
//   st[i] = st[i + 1];
//   st[i + 1] = tmp;
//   console.log(tmp, st[i], st[i + 1]);
// }
// console.log(st.join(""));

//valid anaagram

function Anagram(s, t) {
  let map1 = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = 1;
    } else {
      ++map1[s[i]];
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!map1[t[j]] || map1[t[j]] < 0) {
      return false;
    } else {
      --map1[t[j]];
    }
  }

  return true;

  // console.log(map1);
}

let s = "ramakrao";
let t = "raoamar";
console.log(Anagram(s, t));
