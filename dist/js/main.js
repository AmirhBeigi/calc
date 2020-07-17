    let calcNumber = "";
    let count = 0;
    let lastEl = "";
    let state = false;
    let lastNumber = 0;

    function Numbers(result) {
        try {

            if (result == '+' || result == '-' || result == '*' || result == '/' || result == '/100*') {
                if (state) {
                    count += 1;
                    calcNumber += result;
                    lastNumber = calcNumber.slice(-1);
                    result = result == "/100*" ? "%" : result;
                    document.getElementById('calc').innerHTML += `<span id="sym-${count}" style="color:#ff3e39;margin:0 10px">${result}<span>`;
                    state = false;
                }
            } else {
                if (document.getElementById('calc').innerHTML == '0') {
                    document.getElementById('calc').innerHTML = '';
                }
                calcNumber += result;
                lastNumber = calcNumber.slice(-1);

                state = true;
                document.getElementById('calc').innerHTML += result;
                if (eval(calcNumber).toString().length >= 10) {
                    document.getElementById('result').innerHTML = expo(eval(calcNumber), 2);
                } else {
                    document.getElementById('result').innerHTML = eval(calcNumber);
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    function clearButton() {
        document.getElementById('calc').innerHTML = "0";
        calcNumber = "";
        result.innerHTML = 0;
        state = false;
    }

    document.getElementById('backspace').addEventListener('click', () => {
        // calcNumber = calcNumber.substr(0, calcNumber.length - 1);

        if (lastNumber == '+' || lastNumber == '-' || lastNumber == '*' || lastNumber == '/') {
            calcNumber = calcNumber.slice(-5) == "/100*" ? calcNumber.slice(0, -5) : calcNumber.substr(0, calcNumber.length - 1);
            lastNumber = calcNumber.slice(-1);
            document.getElementById(`sym-${count}`).remove();
            count -= 1;
            if (eval(calcNumber).toString().length >= 10) {
                document.getElementById('result').innerHTML = expo(eval(calcNumber), 2);
            } else {
                document.getElementById('result').innerHTML = eval(calcNumber);
            }
            state = true;

        } else {
            calcNumber = calcNumber.substr(0, calcNumber.length - 1);
            lastNumber = calcNumber.slice(-1);
            values = document.getElementById('calc').innerHTML;
            values = values.substr(0, values.toString().length - 1);
            document.getElementById('calc').innerHTML = values;

        }
        if (calcNumber == "") {
            document.getElementById('calc').innerHTML = "0";
            result.innerHTML = 0;
            state = false;
            return;
        }

    });

    function calc() {
        document.getElementById('calc').innerHTML = document.getElementById('result').innerHTML;
        calcNumber = document.getElementById('result').innerHTML;
        state = true;
    }

    function expo(x, f) {
        return Number.parseFloat(x).toExponential(f);
    }