function revstr(ip, k) {
  let spltarr = ip.split("");
  console.log(spltarr);
  // let mid = Math.floor(k / 2);
  // console.log(mid);
  for (let i = 0; i < ip.length; i = i + 2 * k) {
    console.log(i);
    // for (let j = 0; j < mid; j++) {
    let tmp = spltarr[i]; ///tmp =b
    spltarr[i] = spltarr[ip.length - 1 - i]; //a=b
    spltarr[ip.length - 1 - i] = tmp; //b=tmp
    // }
  }
  return spltarr.join("");
}
let ip = "abcdefghij";
let k = 2;
console.log(revstr(ip, k));
