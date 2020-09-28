const anyStringWithXAmongIt = 'Tryber x aqui!';

const replaceStrings = string => anyStringWithXAmongIt.replace('x', string);
  
const mySkills = ['Html', 'Css', 'Javascript', 'Linux', 'Git'];

function showMySkills(replaceStrings) {
  const orderedSkills = mySkills.sort().join('\n');
  return `${replaceStrings} Minhas 5 principais habilidades são:\n` +
  orderedSkills;
}

console.log(showMySkills(replaceStrings('Richard')));

