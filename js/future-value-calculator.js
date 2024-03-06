function doCalc() {
    zeroBlanks(document.homeForm);
    var p = numval(document.homeForm.p.value);
    var c = numval(document.homeForm.c.value);
    var r = numval(document.homeForm.r.value) / 100;
    var y = numval(document.homeForm.y.value);

    document.homeForm.fv.value = formatNumber(basicInvestment(p, r, y, c), 2);
}

function basicInvestment(p, r, y, c) {
    var futureValuePrincipal = p * Math.pow(1 + r, y);
    var futureValueSeries = c * ((Math.pow(1 + r, y) - 1) / r);

    return futureValuePrincipal + futureValueSeries;
}

function zeroBlanks(form) {
    for (let i = 0; i < form.elements.length; i++) {
        let ctrl = form.elements[i];
        if (ctrl.type === "text" && !ctrl.value) {
            ctrl.value = "0";
        }
    }
}

function numval(val, digits, minval, maxval) {
    val = makeNumeric(val.toString());
    if (val === "" || isNaN(val)) val = 0;
    val = parseFloat(val);
    if (digits != null) {
        let dec = Math.pow(10, digits);
        val = Math.round(val * dec) / dec;
    }
    if (minval != null && val < minval) val = minval;
    if (maxval != null && val > maxval) val = maxval;
    return val;
}

function makeNumeric(s) {
    return s.replace(/[^0-9.-]/g, "");
}

function formatNumber(val, digits) {
    val = numval(val, digits);
    return val.toFixed(digits);
}



// ... other functions (zeroBlanks, numval, formatNumber, etc.) remain the same


function futureValue(p, r, y) {
    return p * Math.pow(1 + r, y);
}

function geomSeries(z, m, n) {
    if (z === 1.0) {
        return n - m + 1;
    } else {
        return (Math.pow(z, n - m + 1) - 1) / (z - 1);
    }
}

// Attach the doCalc function to the form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="homeForm"]');
    form.onsubmit = function(event) {
        event.preventDefault();
        doCalc();
    };
});
