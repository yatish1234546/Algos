let str = "Hello";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}

str = str.split("").reduceRight((accum, s) => {
  return accum + s;
}, "");
