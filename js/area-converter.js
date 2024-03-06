document.addEventListener('DOMContentLoaded', function() {
    const areaUnits = {
        "Square Meter": 1,
        "Square Kilometer": 1000000,
        "Square Centimeter": 0.0001,
        "Square Millimeter": 0.000001,
        "Square Mile": 2589988.110336,
        "Acre": 4046.8564224,
        "Hectare": 10000,
        "Square Yard": 0.83612736,
        "Square Foot": 0.09290304,
        "Square Inch": 0.00064516
    };

    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');
    const convertButton = document.getElementById('convertButton');

    // Populate the unit selectors
    for (const unit in areaUnits) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }

    convertButton.addEventListener('click', function() {
        const inputFactor = areaUnits[inputUnit.value];
        const outputFactor = areaUnits[outputUnit.value];
        const result = (inputValue.value * inputFactor) / outputFactor;
        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        // Populate conversion table
        conversionTable.innerHTML = `<tr><th>Unit</th><th>Value</th></tr>`;
        for (const unit in areaUnits) {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit;
            cell2.textContent = (inputValue.value * inputFactor / areaUnits[unit]).toFixed(6);
        }
        conversionTable.style.display = 'block';
    });
});
