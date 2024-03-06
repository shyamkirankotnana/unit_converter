document.addEventListener('DOMContentLoaded', function() {
    const lengthUnits = {
        "Meter": 1,
        "Kilometer": 1000,
        "Centimeter": 0.01,
        "Millimeter": 0.001,
        "Mile": 1609.34,
        "Yard": 0.9144,
        "Foot": 0.3048,
        "Inch": 0.0254,
        "Nautical Mile": 1852
    };

    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');
    const convertButton = document.getElementById('convertButton');

    // Populate the unit selectors
    for (const unit in lengthUnits) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }

    convertButton.addEventListener('click', function() {
        const inputFactor = lengthUnits[inputUnit.value];
        const outputFactor = lengthUnits[outputUnit.value];
        const result = (inputValue.value * inputFactor) / outputFactor;
        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        // Populate conversion table
        conversionTable.innerHTML = `<tr><th>Unit</th><th>Value</th></tr>`;
        for (const unit in lengthUnits) {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit;
            cell2.textContent = (inputValue.value * inputFactor / lengthUnits[unit]).toFixed(6);
        }
        conversionTable.style.display = 'block';
    });
});
