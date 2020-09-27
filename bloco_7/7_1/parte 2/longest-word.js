const longestWord = word => {
  const words = word.split(' ');
  let biggestWord = '';
  words.forEach(element => {
    if (element.split('').length > biggestWord.length) {
      biggestWord = element;
    };
  });
  return biggestWord;
}
