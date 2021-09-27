const calcNumbers = require('./calcNumbers');

const getRandomNumbers = (quantity) => {
  const randomNumbers = [];

  for (num = 0; num < quantity; num += 1) {
    const randomOneTillHundred = Math.floor(Math.random() * 100 + 1);
    randomNumbers.push(randomOneTillHundred);
  }
  return randomNumbers;
};

calcNumbers(...getRandomNumbers(3))
  .then(data => console.log(`O resultado da operação é: ${ data }`))
  .catch(err => console.log(`Erro: ${ err.message }`));
