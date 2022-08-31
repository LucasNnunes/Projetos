// let cont = 1;
// while (cont <= 9) {
//   let resto = cont % 2;
//   if (resto === 1) {
//     console.log("impar" + cont);
//   }
//   cont++;
// }
// let a = "vermelho";
// let b = "azul";
// let c = b;
// b = a;
// a = c;
// console.log(b);
// console.log(a);

let numero = 0;
while (numero <= 100) {
  if (numero > 1) {
    if (!(numero % 2 === 0) || numero === 2) {
      if (!(numero % 3 === 0) || numero === 3) {
        if (!(numero % 5 === 0) || numero === 5) {
          if (!(numero % 7 === 0) || numero === 7) console.log(numero);
        }
      }
    }
  }

  numero++;
}
