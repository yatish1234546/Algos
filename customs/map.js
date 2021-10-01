let test = [1, 2, 3];

Array.prototype.myMap = function (operation) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(operation(this[i]));
  }

  return newArray;
};

test = test.myMap((el) => el * 2);
console.log(test);
