document.addEventListener('DOMContentLoaded', function() {
    const volumeUnits = {
        liter: 1,
        milliliter: 1000,
        gallon: 0.264172,
        quart: 1.05669,
        pint: 2.11338,
        cup: 4.16667,
        fluidOunce: 33.814
    };
    

    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    // Populate options
    for (const unit in volumeUnits) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }

    convertButton.addEventListener('click', function() {
        const inputFactor = volumeUnits[inputUnit.value];
        const outputFactor = volumeUnits[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        // Populate conversion table
        conversionTable.innerHTML = '';
        for (const unit in volumeUnits) {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            cell2.textContent = (inputValue.value * inputFactor / volumeUnits[unit]).toFixed(6);
        }
        conversionTable.style.display = 'block';
    });
});
