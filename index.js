const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const add = document.getElementById('addition');
const substraction = document.getElementById('substraction');
const multiply = document.getElementById('multiplication');
const divide = document.getElementById('division');
const solutionEl = document.getElementById('solution-el');

let num1 = 0;
let num2 = 0;
let result = 0;

add.addEventListener('click', () => {
    
    if(num1 === 0 || num2 === 0 ){
        num1 = parseFloat(firstInput.value);
        num2 = parseFloat(secondInput.value);
    return solutionEl.textContent = "Please Enter a number.";
    } else {
        result = num1 + num2;
        return solutionEl.textContent = `Addition of ${num1} and ${num2} is ${result}.`;
    }
})

substraction.addEventListener('click', () => {
    if(num1 =='' || num2 ==''){
        num1 = parseFloat(firstInput.value);
        num2 = parseFloat(secondInput.value);
    return solutionEl.textContent = "Please Enter a number.";
    } else {
        result = num1 - num2;
        return solutionEl.textContent = `Difference between ${num1} and ${num2} is ${result}.`;
    }
})

multiply.addEventListener('click', () => {
    if(num1 =='' || num2 ==''){
        num1 = parseFloat(firstInput.value);
        num2 = parseFloat(secondInput.value);
        return solutionEl.textContent = "Please Enter a number.";
    } else {
        result = num1 * num2;
        return solutionEl.textContent = `Product of ${num1} and ${num2} is ${result}.`;
    }
    
})

divide.addEventListener('click', () => {
    if(num1 =='' || num2 ==''){
        num1 = parseFloat(firstInput.value);
        num2 = parseFloat(secondInput.value);
    return solutionEl.textContent = "Please Enter a number.";
    } else {
        result = num1 / num2;
        return solutionEl.textContent = `Quotient of ${num1} and ${num2} is ${result}.`;
    }
})