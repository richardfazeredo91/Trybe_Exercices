const fatorial = number => {
  if(number == 0 || number == 1){
    return 1;
  }
  let fatorial = 2;
  for(let i = 3; i <= number; i += 1){
    fatorial *= i;
  }
  return fatorial;
}


