Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (numberList.length === 0) return 0; // Evita división por cero

  let sum = 0;

  for (let num of numberList) {
    sum += num;
  }

  return sum / numberList.length;
}

console.log(average(numbers));
