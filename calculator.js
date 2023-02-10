// project: calculator
// start date: 1/24

let opDisplay = document.querySelector('.opDisplay');                     // Calc arithmetic display
let totalDisplay = document.querySelector('.totalDisplay');               // Calc Total Display
let numberButtons = document.querySelectorAll('.numbers');                // Calc buttons
let clr = document.getElementById('clr');                                 // clear button
let operators = document.querySelectorAll('.operators');                  // Operator buttons
let decimal = document.getElementById('decimal')                          // decimal button
let addition = document.getElementById('add').value = ' + ';              // addition button
let subtraction = document.getElementById('subtract').value = ' - ';      // subtract button
let multiplication = document.getElementById('multiply'). value = ' * ';  // multiply button
let division = document.getElementById('divide').value = ' / ';           // divide button
let calculateSUm = document.getElementById('calcSum');                    // sum button

numberButtons.forEach(btn => {  // add onclick to each number button 
    btn.onclick = function (btn) {
        opDisplay.textContent += btn.target.value;  // add button value to calc display
    }
})

operators.forEach(op => { // add onclick to each operator button
    op.onclick = function (evt) {
        opDisplay.textContent +=  evt.target.value; // add operator value to calc display
    }
})

decimal.addEventListener('click', (e) => {
    opDisplay.textContent += e.target.value;
})

calculateSUm.addEventListener('click', () => {
    mathText = opDisplay.textContent; // ie '1 + 1'

    newOp = mathText.split(' ').filter(e => e); // split text content into an array. Filter method is used to prevent empty elements 
    for (i = 0; i < newOp.length; i++) { // iterate through array
        if (newOp[i] === '+' || newOp[i] === '-' || newOp[i] === '*' || newOp[i] === '/') {
            continue;                      // if element is arithmetic string, do nothing  
        } else {
            newOp[i] = parseInt(newOp[i]); // convert string element to integer if it is not arithmetic
        }
    }    

    let result = newOp[0] // this variable stores the first element in the array
    for (let i = 1; i < newOp.length; i += 2) {
        const operator = newOp[i];    // this variable stores the second element in the array, which is always an operator
        const operand = newOp[i + 1]; // this variable stores the third element in the array, which always comes after the operator
        switch (operator) {
          case '+': // if operator is '+' perform addition arithmetic 
            result += operand;
            totalDisplay.textContent = result;
            break;
          case '-': // if operator is '-' perform subtraction arithmetic
            result -= operand;
            totalDisplay.textContent = result;
            break;
          case '*': // if operator is '*' perform multiplication arithmetic
            result *= operand;
            totalDisplay.textContent = result;
            break;
          case '/': // if operator is '/' perform division arithmetic
            result /= operand;
            totalDisplay.textContent = result.toFixed(2); // fixing the number to 2 decimal places
            break;
        }
    }  
    console.log("Result:", result);
    console.log(newOp)
} )

clr.addEventListener('click', () => { // clear button will clear the text content on click 
    opDisplay.textContent = ' ';      // clears the arthimetic display section
    totalDisplay.textContent = 0;     // clears the total display section
})
 
