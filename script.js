const numPad = document.querySelector('.button_wrapper');
const display = document.querySelector('.display');
let firstNumber = 0;
let secondNumber = 0;
let operator;
let numInMemory = false; 

numPad.addEventListener('click', (event) => {calculate(event)})

function calculate(e) {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operator);
  console.log(numInMemory);
  if (e.target.classList.contains('num')) {
    enterNum(e.target.textContent.trim());
  }
  if (e.target.classList.contains('c')) {
    reset();
  }
  if (e.target.classList.contains('square')) {
    squareNum();
  }
  if (e.target.classList.contains('root')) {
    rootNum();
  }
  if (e.target.classList.contains('operator')) {
    operatorPress(e.target.textContent.trim());
  }
  if (e.target.classList.contains('dot')) {
    decimal();
  }
}

function enterNum(button) {
  if (numInMemory) {
    display.value = button;
    numInMemory = false;
  } else {
    display.value += button;
  }
}

function reset() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  numInMemory = false; 
  display.value = '';
}

function squareNum() {
  display.value = +display.value * +display.value;
}

function rootNum() {
  display.value = Math.sqrt(+display.value);
}

function operatorPress(op) {
  secondNumber = display.value;
  
  if(numInMemory && operator !== "=") {
      display.value = firstNumber;
  } else {
      numInMemory = true;
      if (operator === "+") {
          firstNumber += +secondNumber;  
      } else if (operator === "-") {
          firstNumber -= +secondNumber;  
      } else if (operator === "*") {
          firstNumber *= +secondNumber;  
      } else if (operator === "/") {
          firstNumber /= +secondNumber;  
      } else {
          firstNumber = +secondNumber;  
      }
      display.value = firstNumber;
      operator = op;
  };
}

function decimal() {
  let localDecimalMemory = display.value;
  
  if(numInMemory) {
      localDecimalMemory = "0.";
      numInMemory = false;
  } else {
      if(localDecimalMemory.indexOf(".") === -1) {
          localDecimalMemory += "."
      }
  };
  display.value = localDecimalMemory;
};
