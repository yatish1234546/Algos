let test = [1, 2, 3];

Array.prototype.myFilter = function (operation) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (operation(this[i]) === true) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

test = test.myMap((el) => el === 2);
console.log(test);
