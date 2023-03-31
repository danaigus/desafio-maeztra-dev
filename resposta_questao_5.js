// a descrição da tarefa me deixou em duvida, pois não espefica condições
// para como os amigos podem se organizar.
// para resolver o problema, considerei que os amigos podem tirar fotos separados
// e que a ordem dos amigos importa.
// exemplo com 2 amigos:
//   (amigoA), (amigoB), (amigoA, amigoB), (amigoB, amigoA).
//   total de possibilidades = 4

function calculateDistinctModes(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    let modes = factorial(n) / factorial(n - i);
    total += modes;
  }
  return total;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
