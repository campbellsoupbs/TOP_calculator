

//Selectors
const buttons = document.querySelectorAll('button');

//Event listeners

window.addEventListener('keydown', keyInput)

const array = Array.from(buttons);
array.forEach(button => button.addEventListener('click', clickInput));


//Functions


function keyInput(e) {
    console.log(e.key)
};

function clickInput(e){
    console.log(e.target.textContent)
};