function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanColorEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
}

refs.btnEl.addEventListener('click', onChangeCololBody);

function onChangeCololBody(event) {
  const colorBody = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = colorBody;
  refs.spanColorEl.textContent = colorBody;
}