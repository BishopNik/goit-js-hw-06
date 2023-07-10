const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueCounterEl: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', onDecrementClick);
refs.incrementBtn.addEventListener('click', onIncrementClick);

let counterValue = 0;
refs.valueCounterEl.textContent = counterValue;

function onDecrementClick() {
    counterValue -= 1;
    refs.valueCounterEl.textContent = counterValue;
}

function onIncrementClick() {    
    counterValue += 1;
    refs.valueCounterEl.textContent = counterValue;
}