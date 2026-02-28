//using in built app1

// function lenoflast(s) {
//   console.log(s.length);

//   s = s.trim(" ");
//   console.log(s.length);

//   s = s.split(" ");
//   console.log(s);

//   console.log(s.length); //check len post split 22 ---->9 imp

//   console.log(s[s.length - 1].length);
//   return s[s.length - 1].length;
// }

// let s = "   fly me   to   the mokhkjhkon  ";
// console.log(lenoflast(s));

//T-O(n)
//S-O(1)

//app2
// function lenoflast(s) {
//   let len = s.length;
//   let lastindexB = len - 1;
//   while (len > 0) {
//     if (s[len - 1] !== " ") {
//       break;
//     }
//     lastindexB--;A
//   }
//   console.log(lastindexB);
//   // return true;
// }

// let s = "   fly me   to   the mokhkjhkon  ";
// console.log(lenoflast(s));


//T-O(n)
//S-O(1)

//app3
function Len_of_word(str) {
  let stringindex = str.length - 1;
  let lastcount = 0;
  while (stringindex > 0) {
    if (str[stringindex] !== " ") {
      ++lastcount;
    } else if (lastcount > 0) {
      break;
    }
    --stringindex;
  }
  return lastcount;
  // console.log(len0fstring);
} 

let str = "   fly me   to   the mokhkjhkon  ";

console.log(Len_of_word(str));
