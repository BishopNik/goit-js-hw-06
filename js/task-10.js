function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBoxes() {
  const amout = refs.inputEl.value;

  function createBoxes(amout) {
    const boxes = [];
    for (let i = 0; i < amout; i++) {      
      const boxColor = getRandomHexColor();
      const valueSize = 30 + i * 10;
      boxes.push(`<div style="background-color: ${boxColor}; width: ${valueSize}px; height: ${valueSize}px;"></div>`)
      // refs.boxesEl.insertAdjacentHTML("beforeend", `<div style="background-color: ${boxColor}; width: ${valueSize}px; height: ${valueSize}px;"></div>`);
    }
    refs.boxesEl.innerHTML = boxes.join("");
  }
  
  createBoxes(amout);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}