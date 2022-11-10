const displayDiv = document.querySelector('#display');
const buttonsList = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear-button');

const add = function (a,b) {
    return a + b    
}
const subs = function (a,b) {
    return a - b    
}
const mult = function (a,b) {
    return a * b    
}
const divi = (a,b) => {
    if (b == 0) {
        return alert('Error, cannot divide by 0')
    }
    return a / b
}
function assignOperands(operString) {
    let operArray = operString.split('');
    operArray = operArray.filter(element => element != ' ');//delete spaces from array
    for (let i=0;i<operArray.length;i++ ) {
        if (operArray[i] == '-' && isNaN(operArray[i-1])) {
            let removed = operArray.splice(i,2);
            let negNumber = '';
            negNumber += removed[0];
            negNumber += removed[1];
            operArray.splice(i,0,negNumber);
        }
    }//encuentra numeros negativos
    for (let i=0;i<operArray.length;i++ ) {
        if (isNaN(operArray[i]) == false && isNaN(operArray[i+1]) == false) {
            let numbers = operArray.splice(i,2);
            let sameNumbers = '';
            sameNumbers += numbers[0];
            sameNumbers += numbers[1];
            operArray.splice(i,0,sameNumbers);
        }
    }
    return operArray;
}
function operate(operArray) {
    let operand1;
    let operand2;
    let result;
    for (let i = 0; i < operArray.length-1; i++) {
        switch (true) {
            case operArray[i] == '/':
                operand1 = operArray[i-1];
                operand2 = operArray[i+1];
                result = divi(operand1,operand2);
                console.log(result);
                operArray.splice(i-1,3,result);
                console.log(operArray);
                break;
            case operArray[i] == '*':
                operand1 = operArray[i-1];
                operand2 = operArray[i+1];
                result = mult(operand1,operand2);
                console.log(result);
                operArray.splice(i-1,3,result);
                console.log(operArray);
                break;
            case operArray[i] == '-':
                operand1 = operArray[i-1];
                operand2 = operArray[i+1];
                result = subs(operand1,operand2);
                console.log(result);
                operArray.splice(i-1,3,result);
                console.log(operArray);
                break;
            case operArray[i] == '+':
                operand1 = parseInt(operArray[i-1]);
                operand2 = parseInt(operArray[i+1]);
                result = add(operand1,operand2);
                console.log(result);
                operArray.splice(i-1,3,result);
                console.log(operArray);
                break;
        }
        result = operArray.join('');
    }
    if(isNaN(result) == true) operate(operArray);
        else return parseInt(result)
}

let newNumber;
buttonsList.forEach(button => button.addEventListener('click',() => {       
    newNumber = button.textContent;
    write(newNumber);
}))

function write(newNumber) {
    let displayScreen = newNumber;
    displayDiv.textContent += displayScreen;
}

clearButton.addEventListener('click', () => {
    displayDiv.textContent = '';
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    let answer = operate(assignOperands(displayDiv.textContent));
    displayDiv.textContent = '';
    displayDiv.textContent = answer.toString();
})