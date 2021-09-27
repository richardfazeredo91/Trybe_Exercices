const calcNumbers = require('./calcNumbers');

const getRandomNumbers = (quantity) => {
  const randomNumbers = [];

  for (num = 0; num < quantity; num += 1) {
    const randomOneTillHundred = Math.floor(Math.random() * 100 + 1);
    randomNumbers.push(randomOneTillHundred);
  }
  return randomNumbers;
};


async function main() {
  try {
    const result = await calcNumbers(...getRandomNumbers(3));
    console.log(result);
  } catch (error) {
    console.log(`Erro: ${ error }`);
  } 
};

main();
