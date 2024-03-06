document.addEventListener('DOMContentLoaded', function() {
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    const temperatureUnits = ['Celsius', 'Fahrenheit', 'Kelvin'];

    // Populate options
    temperatureUnits.forEach(unit => {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    });

    convertButton.addEventListener('click', function() {
        const result = convertTemperature(inputValue.value, inputUnit.value, outputUnit.value);
        resultDiv.textContent = `Result: ${result.toFixed(6)} ${outputUnit.value}`;
        resultDiv.style.display = 'block';

        // Update conversion table
        conversionTable.innerHTML = '';
        temperatureUnits.forEach(unit => {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit;
            cell2.textContent = convertTemperature(inputValue.value, inputUnit.value, unit).toFixed(6);
        });
        conversionTable.style.display = 'block';
    });
});

function convertTemperature(value, fromUnit, toUnit) {
    let tempInCelsius;
    value = parseFloat(value); // Convert string input to a floating-point number

    switch (fromUnit) {
        case 'Celsius':
            tempInCelsius = value;
            break;
        case 'Fahrenheit':
            tempInCelsius = (value - 32) * 5 / 9;
            break;
        case 'Kelvin':
            tempInCelsius = value - 273.15;
            break;
        default:
            return NaN; // Return Not-a-Number if the unit is unrecognized
    }

    let result;
    switch (toUnit) {
        case 'Celsius':
            result = tempInCelsius;
            break;
        case 'Fahrenheit':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'Kelvin':
            result = tempInCelsius + 273.15;
            break;
        default:
            return NaN; // Return Not-a-Number if the unit is unrecognized
    }

    return Number.isFinite(result) ? parseFloat(result.toFixed(6)) : NaN; // Round to 6 decimal places and ensure the result is finite
}

