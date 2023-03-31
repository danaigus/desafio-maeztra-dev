
function getDuplicateValues(inputArr) {
  // utiliza o metodo filter para criar uma array com os elementos repetidos
  const duplicates = inputArr.filter((entry, index) => {
    // checa se o index do elemento é o mesmo da primeira aparição do elemento
    return inputArr.indexOf(entry) !== index;
  })
  // utiliza o new Set() para retirar os valores repetidos da array
  return [...new Set(duplicates)];
}
