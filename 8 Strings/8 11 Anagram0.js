const Anagram = (s, t) => {
  let map1 = {};
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = 1;
    } else {
      ++map1[s[i]];
    }
  }

  console.log(map1);

  for (let j = 0; j < t.length; j++) {
    // if (!map1[t[j]]) {
    //   console.log(map1[t[j]]);
    // }

    if (!map1[t[j]] || map1[t[j]] < 0) {
      return false;
    }
    --map1[t[j]];
  }
  return true;
};
let s = "RAMARAO";
let t = "ARAORA";
console.log(Anagram(s, t));
