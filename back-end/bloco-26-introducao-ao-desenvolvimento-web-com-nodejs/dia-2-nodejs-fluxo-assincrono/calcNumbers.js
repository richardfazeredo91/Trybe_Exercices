function calcNumbers(num1, num2, num3) {
  const promise = new Promise((res, rej) => {
    if ( typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num3 !== 'number'
    ) { rej(new Error("Informe apenas números")) };
    
    const calc = ( (num1 + num2) * num3 );
    if (calc < 50) { rej(new Error("Valor muito baixo")) };

    res(calc);
  });
  return promise;
}

calcNumbers(1, 2, 3)
  .then(data => console.log(`O resultado da operação é: ${ data }`))
  .catch(err => console.log(`Erro: ${ err.message }`));

calcNumbers(1, 2, 'a')
  .then(data => console.log(`O resultado da operação é: ${ data }`))
  .catch(err => console.log(`Erro: ${ err.message }`));

calcNumbers(20, 2, 3)
  .then(data => console.log(`O resultado da operação é: ${ data }`))
  .catch(err => console.log(`Erro: ${ err.message }`));