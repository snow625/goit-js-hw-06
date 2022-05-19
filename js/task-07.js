const fontsizeControl = document.querySelector('#font-size-control');
fontsizeControl.addEventListener('input', onChangeFontSize);

const textAria = document.querySelector('#text');

function onChangeFontSize() {
  textAria.style.fontSize = `${fontsizeControl.value}px`;
}
