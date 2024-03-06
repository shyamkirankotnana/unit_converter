document.addEventListener('DOMContentLoaded', function() {
    const powerUnits = {
        watt: 1,
        kilowatt: 1000,
        megawatt: 1e6,
        horsepower: 745.7,
        btuPerHour: 0.293071
    };

    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const resultDiv = document.getElementById('result');
    const conversionTable = document.getElementById('conversionTable');

    // Populate options
    for (const unit in powerUnits) {
        let option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        inputUnit.appendChild(option.cloneNode(true));
        outputUnit.appendChild(option);
    }

    convertButton.addEventListener('click', function() {
        const inputFactor = powerUnits[inputUnit.value];
        const outputFactor = powerUnits[outputUnit.value];
        const result = inputValue.value * inputFactor / outputFactor;

        resultDiv.textContent = `Result: ${result.toFixed(6)}`;
        resultDiv.style.display = 'block';

        // Populate conversion table
        conversionTable.innerHTML = '';
        for (const unit in powerUnits) {
            let row = conversionTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            cell2.textContent = (inputValue.value * inputFactor / powerUnits[unit]).toFixed(6);
        }
        conversionTable.style.display = 'block';
    });
});
