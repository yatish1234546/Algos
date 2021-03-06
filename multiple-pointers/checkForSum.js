//PS: Given a sorted array find the index of two values matching the target
/*  array = [-3, -2, -1, 0, 1, 2, 4, 2, 8], target=0; output=[-1, 1] */

const arr = [-3, -2, -1, 0, 1, 2, 4, 2, 8];
const target = 0;

console.log(checkForSum(arr, target));
function checkForSum(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  let start = 0;
  let last = arr.length - 1;

  while (start < last) {
    let result = arr[start] + arr[last];

    if (result === target) {
      return [arr[start], arr[last]];
    } else if (result < 0) {
      start++;
    } else {
      last--;
    }
  }
  return false;
}
