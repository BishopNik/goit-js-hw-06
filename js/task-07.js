const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onChangValue);

refs.text.style.fontSize = refs.input.value + 'px';

function onChangValue(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
}