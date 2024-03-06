document.addEventListener('DOMContentLoaded', function() {
    const volumeFlowUnits = {
        cubicMeterPerSecond: 1,
        literPerSecond: 0.001,
        cubicFootPerSecond: 0.0283168,
        gallonPerMinute: 0.0000630902
    };

    populateOptions(volumeFlowUnits);
    setupConversion(volumeFlowUnits);
});

function populateOptions(units) {
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    for (const unit in units) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.replace(/([A-Z])/g, ' $1').trim();
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }
}

function setupConversion(units) {
    const convertButton = document.getElementById('convertButton');
    const inputValue = document.getElementById('inputValue');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    convertButton.addEventListener('click', function() {
        const inputFactor = units[inputUnit.value];
        const outputFactor = units[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        updateUI(result, units, inputFactor);
    });
}

function updateUI(result, units, inputFactor) {
    const inputValue = document.getElementById('inputValue');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    resultDiv.textContent = `Result: ${result.toFixed(6)}`;
    resultDiv.style.display = 'block';

    conversionTable.innerHTML = '';
    for (const unit in units) {
        let row = conversionTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = unit.replace(/([A-Z])/g, ' $1').trim();
        cell2.textContent = (inputValue.value * inputFactor / units[unit]).toFixed(6);
    }
    conversionTable.style.display = 'block';
}
