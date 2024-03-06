document.addEventListener('DOMContentLoaded', function() {
    const velocityUnits = {
        metersPerSecond: 1,
        kilometersPerHour: 3.6,
        milesPerHour: 2.23694,
        feetPerSecond: 3.28084
    };
    
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    populateOptions(velocityUnits);

    convertButton.addEventListener('click', function() {
        const inputFactor = velocityUnits[inputUnit.value];
        const outputFactor = velocityUnits[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        updateConversionTable(velocityUnits, inputFactor);
    });
});

function populateOptions(units) {
    for (const unit in units) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1).replace(/([A-Z])/g, ' $1').trim();
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }
}

function updateConversionTable(units, inputFactor) {
    conversionTable.innerHTML = '';
    for (const unit in units) {
        let row = conversionTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1).replace(/([A-Z])/g, ' $1').trim();
        cell2.textContent = (inputValue.value * inputFactor / units[unit]).toFixed(6);
    }
    conversionTable.style.display = 'block';
}
