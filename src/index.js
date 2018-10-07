module.exports = function longestConsecutiveLength(array) {
  let arr = array;
  let max = 0;
  let obj = {};

  for(let i in arr) {
    obj[arr[i]] = true;
  }

  for(let i in obj) {
    if(!obj[i - 1]){
      let curent = i;
      let count = 0;

      while(obj[curent]){
        count++;
        curent++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
}
