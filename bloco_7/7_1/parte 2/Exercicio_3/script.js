const clickButton = document.getElementById('click-button');

let clickCount = 0;

clickButton.addEventListener('click', () => {
  clickCount += 1;
  const clickInfo = document.getElementById('click-info');
  
  clickCount === 1 ? clickInfo.innerHTML = `O botão foi clicado <strong><em>${clickCount}</em></strong> vez!`:
  clickInfo.innerHTML = `O botão foi clicado <strong><em>${clickCount}</em></strong> vezes!`;
});

