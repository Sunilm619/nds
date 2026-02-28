function Lar_odd(x) {
  //   let num = Number(x);
  //   console.log(x.substring(0, lastindx));
  //approach 1
  let lastindx = x.length - 1;
  //   for (let i = 0; i < x.length; i++) {
  //     if (Number(x[lastindx]) % 2 !== 0) {
  //       return x.substring(0, lastindx + 1);
  //     }
  //     --lastindx;
  //   }
  //   return "Positve num";

  while (lastindx >= 0) {
    if (Number(x[lastindx]) % 2 !== 0) {
      return x.substring(0, lastindx + 1);
    }
    --lastindx;
  }
  return "postv num";
}

let x = "12356";
console.log(Lar_odd(x));
