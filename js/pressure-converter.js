document.addEventListener('DOMContentLoaded', function() {
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const pressureUnits = {
        pascal: 1,
        bar: 100000,
        psi: 6894.76,
        atm: 101325
    };

    populateOptions(pressureUnits);
    setupConversion(pressureUnits, inputUnit, outputUnit, inputValue);
});

function populateOptions(units) {
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    for (const unit in units) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }
}

function setupConversion(units, inputUnit, outputUnit, inputValue) {
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    convertButton.addEventListener('click', function() {
        const inputFactor = units[inputUnit.value];
        const outputFactor = units[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        updateUI(result, units, inputFactor, inputValue);
    });
}

function updateUI(result, units, inputFactor, inputValue) {
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    resultDiv.textContent = `Result: ${result.toFixed(6)}`;
    resultDiv.style.display = 'block';

    conversionTable.innerHTML = '';
    for (const unit in units) {
        let row = conversionTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        cell2.textContent = (inputValue.value * inputFactor / units[unit]).toFixed(6);
    }
    conversionTable.style.display = 'block';
}
