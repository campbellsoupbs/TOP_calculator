//Variables
let displayVal = 0;
let val_1 = '';
let val_2 = '';
let val_1_list = [];
let val_2_list = [];
let func = '';

//Selectors
const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

//Event listeners

window.addEventListener('keydown', keyInput)

const array = Array.from(buttons);
array.forEach(button => button.addEventListener('click', clickInput));


//Functions


function keyInput(e) {
    console.log(e.key)
    output.innerHTML = `<h3>${e.key}</h3>`;
};

function clickInput(e){
    // console.log(e.target);
    let buttonType = e.target.classList[1];
    // output.innerHTML = `<h3>${e.target.textContent}</h3>`;
    if (buttonType === 'num') {
        if (val_1_list.indexOf('.') < 0 || e.target.classList[0] !== '.') {
            val_1_list.push(e.target.classList[0]);
            val_1 = val_1_list.join('');
            console.log(val_1);
            output.innerHTML = `<h3>${val_1}</h3>`;
        }
    }
    else if (buttonType === 'func') {
        
    }

};


// output.innerHTML = `<h3>${val_1}</h3>`;