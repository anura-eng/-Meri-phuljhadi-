const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const finalMsg = document.getElementById('finalMsg');

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * window.innerWidth - 100);
  const j = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${i}px`;
  noBtn.style.top = `${j}px`;
});

yesBtn.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
  finalMsg.classList.remove('hidden');
});