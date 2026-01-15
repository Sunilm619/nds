function Balanced(ip) {
  // return true;
  let counter = 0;
  let tnp = 0;
  for (let i = 0; i < ip.length; i++) {
    if (ip[i] === "L") {
      counter++;
    } else {
      counter--;
    }
    if (counter === 0) {
      tnp++;
    }
  }
  return tnp;
}
let ip = "LRLLRRLRLLLLRRRR";
console.log(Balanced(ip));
