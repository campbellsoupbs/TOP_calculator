//Variables
let answer = '';
let val_1 = '';
let val_1_list = [];
let val_2 = '';
let val_2_list = [];
let func = '';
let computed = 0;

//Selectors
const numButtons = document.querySelectorAll('button.num');
const funcButtons = document.querySelectorAll('button.func');
const returnButton = document.querySelector('.return');
const AllClearButton = document.querySelector('.clear');
const del = document.querySelector('.delete');
const percent   = document.querySelector('.percent');
const sign = document.querySelector('.sign');

const output = document.querySelector('.output');

//Event listeners

    //Listener for keyboard input
window.addEventListener('keydown', keyInput);

    //Listeners for all number buttons
const arrayNum = Array.from(numButtons);
arrayNum.forEach(button => button.addEventListener('click', clickNumInput));
    //Listeners for all operator function buttons
const arrayFunc = Array.from(funcButtons);
arrayFunc.forEach(button => button.addEventListener('click', clickFuncInput));
    //Listeners for special function buttons
returnButton.addEventListener('click', operate);
AllClearButton.addEventListener('click', clear);
del.addEventListener('click', deleteNum);
percent.addEventListener('click', percentNum);
sign.addEventListener('click', signChange);



//Functions


function clickNumInput(e){
    // console.log(e.target);
    // output.innerHTML = `<h3>${e.target.textContent}</h3>`;
    if (computed === 1 && func.length < 1) {
        clear();
        if (val_1_list.indexOf('.') < 0 || e.target.classList[0] !== '.') {
            val_1_list.push(e.target.classList[0]);
            val_1 = +val_1_list.join('');
            console.log(val_1);
            output.innerHTML = `<h3>${val_1}</h3>`;
        };
    } else if (func.length < 1) {
        if (val_1_list.indexOf('.') < 0 || e.target.classList[0] !== '.') {
            val_1_list.push(e.target.classList[0]);
            val_1 = +val_1_list.join('');
            console.log(val_1);
            output.innerHTML = `<h3>${val_1}</h3>`;
        };
    } else {
        if (val_2_list.indexOf('.') < 0 || e.target.classList[0] !== '.') {
            val_2_list.push(e.target.classList[0]);
            val_2 = +val_2_list.join('');
            console.log(val_2);
            output.innerHTML = `<h3>${val_2}</h3>`;
        };  
    };
};

function clickFuncInput(e){
    func = e.target.classList[0];
    console.log(func)
};

function operate(e){
    if (func === '+') {
        add();
    } else if (func === '-') {
        subtract();
    } else if (func === '*') {
        multiply();
    } else if (func === '/') {
        divide();
    }
    
    console.log(answer)
    output.innerHTML = `<h3>${answer}</h3>`;
    val_2='';
    val_2_list=[]
    func ='';
    computed++;
}

function clear() {
    answer='';
    val_1 = '';
    val_2 = '';
    val_1_list = [];
    val_2_list = [];
    func = '';
    computed = 0;
    output.innerHTML = `<h3>${answer}</h3>`;
}

function deleteNum() {
    if (func.length > 0) {
        val_2_list.pop();
        val_2 = +val_2_list.join('');
        console.log('delete from val_2')
        output.innerHTML = `<h3>${val_2}</h3>`;
    } else {
        val_1_list.pop();
        val_1 = +val_1_list.join('');
        console.log('delete from val_1')
        output.innerHTML = `<h3>${val_1}</h3>`;
    }
}

function percentNum() {
    if (val_2.length < 1) {
        val_1 = val_1/100;
        console.log('% from val_1')
        output.innerHTML = `<h3>${val_1}</h3>`;
    } else {
        val_2 = val_2/100;
        console.log('% from val_2')
        output.innerHTML = `<h3>${val_2}</h3>`;
    }
}

function signChange() {
    if (val_2.length < 1) {
        val_1 = val_1*(-1);
        console.log('sign change from val_1')
        output.innerHTML = `<h3>${val_1}</h3>`;
    } else {
        val_2 = val_2*(-1);
        console.log('sign change from val_2')
        output.innerHTML = `<h3>${val_2}</h3>`;
    }
}

    //This function is not finished. Need to connect key input with other functions..
function keyInput(e) {
console.log(e.key)
output.innerHTML = `<h3>${e.key}</h3>`;
};



//Math functions

function add() {
    answer = val_1 + val_2;
    val_1 = answer; 
};

function subtract() {
    answer = val_1 - val_2;
    val_1 = answer; 
};

function multiply() {
    answer = val_1 * val_2;
    val_1 = answer; 
};

function divide() {
    if (val_1 === 0) {
        answer = 0;
        val_1 = 0;
    } else if (val_2 === 0) {
        answer = 'undefined';
        val_1 = 0;
    } else {
        answer = val_1/val_2;
        val_1 = answer;
    };
};

