const refForm = document.querySelector('.login-form');

refForm.addEventListener('submit', onFormSubmit);

const formValue = {};

function onFormSubmit(event) {
    event.preventDefault();

    const inputEmailValue = this.elements.email.value;
    const inputPasswordValue = this.elements.password.value;

    if (!inputEmailValue || !inputPasswordValue) {
        alert('Все поля должны быть заполнены!');
        return
    }

    // const formData = new FormData(event.currentTarget);
    
    // formData.forEach((value, key) => {
    //     formValue[key] = value;
    // });
    
    // formValue.email = inputEmailValue;
    // formValue.password = inputPasswordValue;

    formValue.email = inputEmailValue;
    formValue.password = inputPasswordValue;

    console.table(formValue);

    refForm.reset();
}
