let num = -78;
// console.log(num % 10);
function count_digit(num) {
  let count = 0;
  //c1 if num 0

  if (num === 0) return 1;

  //c2 if neg num make it to abs

  num = Math.abs(num);

  //why not for loop bcs no length from num datatyp
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(count_digit(num));
