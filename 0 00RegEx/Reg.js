let str1 = "abc123";
let str2 = "abc123def456@";
let numbers_string = str1.match(/\d/g);
let numbers_string1 = str1.match(/\d+/g);
// console.log(numbers_string);
// console.log(numbers_string1);
console.log(str2.match(/\W+/g));
console.log("hello    world".match(/\S/g).join(""));
