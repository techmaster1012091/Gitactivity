let score = 0;

const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');
const display = document.querySelector('#display');

incrementBtn.addEventListener("click", () => {
    score++;
    display.textContent = `Score: ${score}`;
});
decrementBtn.addEventListener("click", () => {
    score--;
    display.textContent = `Score: ${score}`;
});
resetBtn.addEventListener("click", () => {
    score = 0;
    display.textContent = `Score: ${score}`;
});