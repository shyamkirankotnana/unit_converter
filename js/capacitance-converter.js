document.addEventListener('DOMContentLoaded', function() {
    const capacitanceUnits = {
        farad: 1,
        millifarad: 0.001,
        microfarad: 0.000001,
        nanofarad: 0.000000001,
        picofarad: 0.000000000001
    }
        populateOptions(capacitanceUnits);
        setupConversion(capacitanceUnits);
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
    
    function setupConversion(units) {
        const convertButton = document.getElementById('convertButton');
        const inputValue = document.getElementById('inputValue');
        const inputUnit = document.getElementById('inputUnit');
        const outputUnit = document.getElementById('outputUnit');
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
        