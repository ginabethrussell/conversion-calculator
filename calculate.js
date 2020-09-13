// Conversion Calculator
// This website allows a user to enter a number from a button keypad,
// and choose and unit conversion. The site will display the converted value.

// initialize global value to accumulate user number keypad clicks
let numberStr = "";

// adds the number keypad value to numberStr each time the user clicks a value
// resets numberStr to an empty string if user clicks clear
function addValue(numKey) {
    if (numKey === "clear") {
        numberStr = "";
    } else {
        numberStr += numKey;
    }
    let displayElement = document.querySelector('#display');
    displayElement.innerHTML = numberStr;
}

// This function converts the value to the new unit and displays the result
// converts the number string into a number
// uses the passed in value as a key to the conversion factor object
// if number string is empty, returns and ends function
// calculates result
// rounds result to at most 2 decimal places
// displays the result
function convertUnit(conversion) {
    let unit = Number(numberStr);
    const conversionFactors = {
        'f-c': function (unit) { return (unit - 32) * 5 / 9 },
        'c-f': function (unit) { return (unit * 9 / 5) + 32 },
        'm-km': function (unit) { return unit * 1.609 },
        'km-m': function (unit) { return unit / 1.609 },
        'f-m': function (unit) { return unit / 3.281 },
        'm-f': function (unit) { return unit * 3.281 },
        'g-l': function (unit) { return unit * 3.785 },
        'l-g': function (unit) { return unit / 3.785 },
        'p-kg': function (unit) { return unit / 2.205 },
        'kg-p': function (unit) { return unit * 2.205 }
    }

    if (numberStr === '') {
        return;
    }

    let answerfunction = conversionFactors[conversion]
    let answer = answerfunction(unit);
    answer = +answer.toFixed(2);

    let displayElement = document.querySelector('#display');
    displayElement.innerHTML = answer;
    console.log(conversion, numberStr, answer);
    numberStr = answer.toString();
}