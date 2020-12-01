const arr = [1, 2, 3, 4, 5];
const value = 5;

let left = 0;
let right = arr.length - 1;
let mid = Math.floor((left + right) / 2);

while (arr[mid] !== value && left < right) {
  if (value < arr[mid]) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  mid = Math.floor((left + right) / 2);
}

console.log(arr[mid] === value);
