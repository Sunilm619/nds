var reverse = function (x) {
  num = Math.abs(x);
  let rem = 0;
  let limit = Math.pow(2, 31);
  while (num > 0) {
    rem = rem * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (rem > limit) return 0;
  return x < 0 ? -rem : rem;
};

console.log(reverse(123));
