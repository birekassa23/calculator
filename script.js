// Get the display element (the input box)
const display = document.getElementsByClassName('display')[0];

// Get all the button elements inside .buttons
const buttons = document.querySelectorAll('.buttons button');

// Set display to empty when the page loads
display.value = "";

// --- CALLBACK EXAMPLE ---
function updateDisplay(value, callback) {
    display.value += value;

    // Call the callback if provided
    if (callback) {
        callback();
    }
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Remove last character
function backspace() {
    display.value = display.value.slice(0, -1);
}

// --- PROMISE EXAMPLE ---
function evaluateExpression(expression) {
    return new Promise((resolve, reject) => {
        try {
            const result = eval(expression);
            resolve(result); // success
        } catch (error) {
            reject("Invalid Expression"); // error
        }
    });
}

// --- ASYNC / AWAIT EXAMPLE ---
async function calculate() {
    try {
        const result = await evaluateExpression(display.value); // wait for result
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '←':
                backspace();
                break;
            case '=':
                calculate(); // uses async/await
                break;
            default:
                // Use callback to log each click
                updateDisplay(value, () => {
                    console.log(`Button "${value}" clicked`);
                });
        }
    });
});
