// Select the element by its id
const valueElement = document.querySelector('#value');

// Function to increase the value
function increase() {
    let currentValue = parseInt(valueElement.innerHTML);
    currentValue++;
    valueElement.innerHTML = currentValue; 
}

// Function to decrease the value
function decrease() {
    let currentValue = parseInt(valueElement.innerHTML);
    currentValue--; 
    valueElement.innerHTML = currentValue; 
}
