let a = [5, 1, 4, 2];
const output = [8, 40, 10, 20];

const products = [];

for (let i = 0; i < a.length; i++) {
  let product = 1;

  for (let j = 0; j < a.length; j++) {
    if (i !== j) {
      product *= a[j];
    }
    products[i] = product;
  }
}
