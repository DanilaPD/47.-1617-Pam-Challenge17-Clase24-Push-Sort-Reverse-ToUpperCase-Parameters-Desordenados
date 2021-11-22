//Mayúscula inicial a cada una de las palabras de un "string":
const string = "torta de ricota";

const arr = string.split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const string2 = arr.join(" ");

console.log(string2);
