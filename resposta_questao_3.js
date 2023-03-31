
function checkSequence(input) {
  const stack = [];
  let lastChar = '';
  [...input].forEach(char => {
    // utiliza o char na última posição do vetor
    lastChar = stack[stack.length - 1]
    // verifica se o char atual combina com o último char do vetor
    // caso sim, remove o último char do vetor
    switch (char) {
      case ')':
        if (lastChar === '(') {
          stack.pop()
        }
        break;
      case '}':
        if (lastChar === '{') {
          stack.pop()
        }
        break;
      case ']':
        if (lastChar === '[') {
          stack.pop()
        }
        break;
      default:
        // se o char atual não combinar com o último char do vertor
        // ele é adicionao na última posição
        stack.push(char);
        break;
    }
  });

  // se ainda houver chars no vetor, a string é invalida
  return stack.length === 0;
}
