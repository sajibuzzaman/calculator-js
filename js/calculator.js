//Display value
function display(value) {
    const display = document.getElementById('display');
    const displayValueText = display.innerText;
    const displayValue = parseFloat(display.innerText);
    if ( displayValue == 0) {
        display.innerText = value;
    } else {
        display.innerText = displayValueText + value;
    }
}

//after equal result show
document.getElementById('equal').addEventListener('click', function() {
    const display = document.getElementById('display');
    const displayValue = eval(display.innerText);
    display.innerText = displayValue;
})

//after ac clear display
document.getElementById('ac').addEventListener('click', function() {
    const display = document.getElementById('display');
    display.innerText = '0';
})

//after delete clear last value
document.getElementById('del').addEventListener('click', function() {
    const display = document.getElementById('display');
    const displayText = display.innerText;
    if (displayText.length > 1) {
        let result = '';
    for (let i = 0; i < displayText.length-1; i++) {
        result += displayText[i];
    }
    display.innerText = result;
    } else {
        display.innerText = '0';
    }
})