const refInput = document.querySelector('#validation-input');

refInput.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
    const inputLength = Number(refInput.dataset.length);
    if (event.currentTarget.value.length === inputLength) {
        refInput.classList.remove('invalid');
        refInput.classList.add('valid');        
    } else {
        refInput.classList.remove('valid');
        refInput.classList.add('invalid');
    }
}