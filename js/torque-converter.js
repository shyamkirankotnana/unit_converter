document.addEventListener('DOMContentLoaded', function() {
    const torqueUnits = {
        newtonMeter: 1,
        footPound: 1.35582,
        inchPound: 0.113,
        kilonewtonMeter: 1000
    };

    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    // Populate options
    for (const unit in torqueUnits) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }

    convertButton.addEventListener('click', function() {
        const inputFactor = torqueUnits[inputUnit.value];
        const outputFactor = torqueUnits[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        // Populate conversion table
        conversionTable.innerHTML = '';
        for (const unit in torqueUnits) {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            cell2.textContent = (inputValue.value * inputFactor / torqueUnits[unit]).toFixed(6);
        }
        conversionTable.style.display = 'block';
    });
});
