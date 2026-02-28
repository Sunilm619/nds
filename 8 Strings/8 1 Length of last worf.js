//using in built

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

function lenoflast(s) {
  let len = s.length;
  let lastindexB = len - 1;

  //   console.log(lastindexB);
  while (lastindexB > 0) {
    if (s[lastindexB] === " ") {
      --lastindexB;
    } else {
      break;
    }
  }
  let lentth_oflast = 0;
  while (lastindexB > 0) {
    if (s[lastindexB] !== " ") {
      ++lentth_oflast;
      --lastindexB;
    } else {
      break;
    }
  }

  return lentth_oflast;
}

let s = "   fly me   to   the mokhkjhkon  ";

lenoflast(s);
console.log(lenoflast(s));
