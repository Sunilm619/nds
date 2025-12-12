/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  //     let count=0
  //     for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < jewels.length; j++) {
  //             if(stones[i]===jewels[j]){
  //                 count++
  //                 break
  //             }
  //     }
  //     }
  //     return count

  let ob = new Set();
  for (let i = 0; i < jewels.length; i++) {
    ob.add(jewels[i]);
  }
  // return ob
  // console.log(ob)
  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    if (ob.has(stones[j])) {
      ++count;
    }
  }

  return count;
};

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));

//O(n) time O(1) space
