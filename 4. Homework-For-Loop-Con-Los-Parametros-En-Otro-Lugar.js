//Cambiando de lugar los parámetros de un "for loop":

// For Loop original:
for (let i = 0; i < 3; i++) {
  console.log("Hola, el valor de 'i' es ", i);
}

// Cambiando de lugar el 1° parámetro:
let j = 0;

for (; j < 3; j++) {
  console.log("Hola, el valor de 'j' es ", j);
}

// Cambiando de lugar el 2° parámetro:
for (let k = 0; ; k++) {
  console.log("Hola, el valor de 'k' es ", k);
  if (k >= 2) {
    break;
  }
}

// Cambiando de lugar el 3° parámetro:
for (let l = -1; l < 2; ) {
  l++;
  console.log("Hola, el valor de 'l' es ", l);
}

// Cambiando todos los parámetros de lugar:
let m = 0;

for (;;) {
  if (m > 2) break;
  console.log("Hola, el valor de 'm' es ", m);
  m++;
}
