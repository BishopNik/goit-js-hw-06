const refs = {
    nameInput: document.querySelector('#name-input'),
    textInput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value) {
        refs.textInput.textContent = event.currentTarget.value
    } else {
        refs.textInput.textContent = 'Anonymous'
    }
    
}