/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x===y) { 
      return true; }
   else {
      return false; }
   }


function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) { 
      return true; }
   else {
      return false; }
   }

   // El comando .lenght es para ver cuanta cantidad de letras tiene

   function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
if(num < 90) { 
   return true; 
} else {
   return false; 
}
}

// El ; se usa porque es una buena practica para saber donde termina
function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50) { 
      return true; 
   } else {
      return false; 
   }
}

// Estos dos ejercicios de Par e Impar se resuelven teniendo en cuenta el modulo
// Si dividiendo el numero por 2, el modulo es >0 es impar, si es 0 es par
function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
if (num % 2 === 0) { 
   return true; 
} else {
   return false; 
}
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 1) {
   return true; 
} else {
   return false; 
}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};