document.addEventListener('DOMContentLoaded', function() {
    const conversionType = document.getElementById('conversionType');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const inputValue = document.getElementById('inputValue');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');

    const units = {
        "Area": ["acre", "are", "hectare", "square centimeter", "square foot", "square inch", "square kilometer", "square meter", "square mile", "square yard", "square feet"],
        "Length, Height & Distance": ["kilometer", "meter", "centimeter", "decimeter", "millimeter", "angstrom", "mile", "fathom", "yard", "foot", "hand", "inch", "finger", "bamboo", "barleycorn"],
        "Mass": ["tonne", "kilogram", "gram", "milligram", "ton [long, UK]", "ton [short, US]", "hundredweight [long, UK]", "hundredweight [short, US]", "quarter [UK]", "quarter [US]", "slug", "stone", "pound", "troy pound", "ounce", "troy ounce", "Robie", "dram", "drachme", "point", "grain"],
        "Pressure": ["atm", "bar", "mbar", "kgf/m2", "kgf/cm2", "kPa", "MPa", "Pa", "lbf/ft2", "psi", "torr", "ksi"],
        "Volume & Capacity": ["cubic meter", "liter", "milliliter", "gallon", "quart", "pint", "cup", "fluid ounce"],
        "Temperature": ["Celsius", "Fahrenheit", "Kelvin", "Rankine", "Delisle", "Newton", "Reaumur", "Romer"],
        "Acceleration": ["meter per square second", "foot per square second", "gravity (acceleration)", "Galileo", "inch per square second"],
        "Capacitance": ["Faraday", "millifaraday", "microfaraday", "nanofaraday", "picofaraday"],
        "Density & Mass Capacity": ["gram per cubic centimeter", "gram per liter", "kilogram per liter", "kilogram per cubic meter", "pound per cubic inch", "pound per gallon [US]"],
        "Electric Charge": ["Coulomb", "abcoulomb", "Ampere hour"],
        "Energy": ["Joule", "Kilowatt-hour", "Calorie", "British Thermal Unit", "Foot-pound"],
        "Force": ["Newton", "Dyne", "Pound force", "Kilopond"],
        "Force / Length": ["Newton per meter", "Pound force per foot"],
        "Illuminance": ["Lux", "Foot-candle"],
        "Power": ["Watt", "Kilowatt", "Horsepower"],
        "Torque": ["Newton-meter", "Pound-foot"],
        "Mass Flow": ["Kilogram per second", "Pound per second"],
        "Time": ["Second", "Minute", "Hour", "Day"],
        "Velocity & Speed": ["Meter per second", "Kilometer per hour", "Mile per hour"],
        "Viscosity": ["Pascal second", "Poise"],
        "Volume Flow": ["Cubic meter per second", "Liter per second"],
        
    };

    const factors = {
        "Area": [0.09290304 * 43560, 100, 10000, 0.0001, 0.09290304, 0.09290304 / 144, 1000000, 1, 0.09290304 * 27878400, 0.09290304 * 9, 0.09290304],
        "Length, Height & Distance": [1000, 1, 0.01, 0.1, 0.001, 0.0000000001, 0.3048 * 5280, 6 * 0.3048, 0.9144, 0.3048, 0.1016, 0.3048 / 12, (0.3048 / 12) * 4.5, 3.2, 0.0085],
        "Mass": [1000, 1, 0.001, 0.000001, 0.45359237 * 2240, 0.45359237 * 2000, 0.45359237 * 112, 0.45359237 * 100, 0.45359237 * 28, 0.45359237 * 25, 14.593903, 0.45359237 * 14, 0.45359237, (144 / 175) * 0.45359237, 0.45359237 / 16, ((144 / 175) * 0.45359237) / 12, 0.01, 0.45359237 / 256, 0.0038, 0.000002, 0.0000647989],
        "Pressure": [101325, 100000, 100, 9.80665, 98066.5, 1000, 1000000, 1, 430.92233 / 9, 430.92233 * 16, 101325 / 760, (430.92233 * (1 / 0.009)) * 144],
        "Volume & Capacity": [1, 0.001, 0.000001, 0.00378541, 0.000946353, 0.000473176, 0.000236588, 2.9574e-5],
        "Temperature": [], // Special handling required for temperature conversions
        "Acceleration": [1, 0.3048, 9.80665, 0.01, 0.0254],
        "Capacitance": [1, 1E-3, 1E-6, 1E-9, 1E-12],
        "Density & Mass Capacity": [1000, 1, 1000, 1, 27679.9047, 119.826427],
        "Electric Charge": [1, 10, 3600],
        "Energy": [1, 3600000, 4.184, 1055.06, 1.35582],
        "Force": [1, 0.00001, 4.44822, 9.80665],
        "Force / Length": [1, 0.00571015],
        "Illuminance": [1, 10.7639],
        "Power": [1, 1000, 745.7],
        "Torque": [1, 1.35582],
        "Mass Flow": [1, 0.453592],
        "Time": [1, 60, 3600, 86400],
        "Velocity & Speed": [1, 0.277778, 0.44704],
        "Viscosity": [1, 0.1],
        "Volume Flow": [1, 0.001],
    };

 /*    function populateProperties() {
        conversionType.innerHTML = '';
        Object.keys(units).forEach(property => {
            conversionType.innerHTML += `<option value="${property}">${property}</option>`;
        });
        populateUnits("Area"); // Default to Area on load
    }

   function populateUnits(property) {
        const options = units[property];
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';

        options.forEach(unit => {
            fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
            toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        });
    } */


    function populateUnits(category) {
        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';
    
        units[category].forEach(unit => {
            fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
            toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        });
    }


    function convertUnits() {
        const property = conversionType.value;
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(inputValue.value);
        let targetValue;

        if (property === "Temperature") {
            targetValue = convertTemperature(value, from, to);
        } else {
            const fromIndex = units[property].indexOf(from);
            const toIndex = units[property].indexOf(to);
            const fromFactor = factors[property][fromIndex];
            const toFactor = factors[property][toIndex];
            const baseValue = value * fromFactor;
            targetValue = baseValue / toFactor;
        }
        result.textContent = `${value} ${from} is equal to ${targetValue.toFixed(2)} ${to}`;
    }
    function convertTemperature(value, fromUnit, toUnit) {
        let result;
        switch (fromUnit) {
            case "Celsius":
                result = value;
                break;
            case "Fahrenheit":
                result = (value - 32) * 5 / 9;
                break;
            case "Kelvin":
                result = value - 273.15;
                break;
            // Add other cases if needed
        }
        switch (toUnit) {
            case "Celsius":
                return result;
            case "Fahrenheit":
                return (result * 9 / 5) + 32;
            case "Kelvin":
                return result + 273.15;
            // Add other cases if needed
        }
    }

    conversionType.addEventListener('change', function() {
        populateUnits(this.value);
    });
    convertButton.addEventListener('click', convertUnits);

    // Initialize the properties dropdown
    populateProperties();
});
