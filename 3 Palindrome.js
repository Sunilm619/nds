function palindrome(x) {
  xcopy = x;
  let pal_num = 0;
  while (x > 0) {
    remainder = x % 10;
    pal_num = pal_num * 10 + remainder;
    x = Math.floor(x / 10);
  }
  //   if (xcopy === pal_num) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //we can write above one as same

  return xcopy === pal_num;
}
let x = 12321;
console.log(palindrome(x));
