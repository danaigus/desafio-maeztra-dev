function checkOrder(num) {
  // transforma o número em uma string e depois em um array de números
  const digits =  num.toString().split('').map(Number);
  
  // verifica se todos os dígitos são iguais
  const isAllEqual = digits.every(digit => digit === digits[0]);
  if (isAllEqual) {
    return false;
  }
  
  // verifica se os dígitos estão em ordem crescente ou decrescente
  const isAscending = digits.every((digit, i) => i === 0 || digit === digits[i - 1] || digit === digits[i - 1] + 1);
  const isDescending = digits.every((digit, i) => i === 0 || digit === digits[i - 1] || digit === digits[i - 1] - 1);
  return isAscending || isDescending;
}
