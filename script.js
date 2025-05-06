// Get the display element (the input box)
const display = document.getElementsByClassName('display')[0];

// Get all the button elements inside .buttons
const buttons = document.querySelectorAll('.buttons button');

// Set display to empty when the page loads
display.value = "";

// This function updates the display value (reusable)
function updateDisplay(value) {
    display.value += value;
}

// This function clears the display (reset)
function clearDisplay() {
    display.value = "";
}

// This function removes the last character (like backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// This function evaluates the expression using JavaScript eval()
function calculate() {
    try {
        // Try to evaluate the expression
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Loop through all buttons and add event listeners (callback style)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle different types of buttons
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '←':
                backspace(); 
                break;
            case '=':
                calculate(); 
                break;
            default:
                updateDisplay(value);
        }
    });
});
