function yearWithMostPeopleWorking(matrix) {
  // cria um objeto que mapeia cada ano trabalhado para o número de pessoas que trabalharam nesse ano
  const yearToPeople = {};
  matrix.forEach((person) => {
    for (let i = person[0]; i <= person[1]; i++) {
      if (yearToPeople[i]) {
        yearToPeople[i]++;
      } else {
        yearToPeople[i] = 1;
      }
    }
  });
  
  let yearWithMostPeople = [];
  let maxPeople = 0;
  // percorre cada ano e número de pessoas no objeto yearToPeople usando Object.entries
  Object.entries(yearToPeople).forEach(([year, people]) => {
    // checa se houve mais pessoas no ano atual do que anteriormente
    if (people > maxPeople) {
      maxPeople = people;
      yearWithMostPeople = [year];
    } else if (people === maxPeople) { // checa se o ano atual possui a mesma quantidade que o maior
      yearWithMostPeople.push(year);
    }
  });
  
  // retorna a array com o anos com mais pessoas
  return yearWithMostPeople;
}
