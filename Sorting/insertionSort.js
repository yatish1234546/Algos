const arr = [10, 5, 3, 6, 1];


for(let i=1; i<arr.length; i++) {
  let current = arr[i];

  for(var j=i-1; j>=0 && arr[j] > current; i++) {
    arr[j+1] = arr[j]
  }

  console.log(arr)
}