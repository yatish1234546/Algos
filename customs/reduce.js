let test = [1, 2, 3];

Array.prototype.myReduce = function (operation) {
  let a = 0; // Step 1
  for (
    let i = 0;
    i < this.length;
    i++ // Step 2
  ) {
    operation((a = a + this[i])); // Step 3
  }

  return a;
};

var arr = [5, 21, 61, 8, 1];
var result = arr.myReduce((acc, item) => acc + item);
console.log(result);
