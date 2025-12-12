var findWordsContaining = function (words, x) {
  //     let arr=[]
  // for(let i=0;i<words.length;i++){
  //     if (words[i].includes(x)){
  //         arr.push(i)
  //     }
  // }
  // return arr
  let arr2 = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        arr2.push(i);
        break;
      }
    }
  }
  return arr2;
};

let words = ["leet", "code"];
let x = "e";
console.log(findWordsContaining(words, x));

// time -->O(m*n)
// space -->O(1)
