document.addEventListener('DOMContentLoaded', function() {
    let displayValue = document.getElementById('displayValue');
    let currentNum = '';
    let firstNum = '';
    let operator = '';
    
    document.getElementById('keys').addEventListener('click', function(event) {
        const key = event.target.innerText;
        
        if (!isNaN(key) || key === '.') {
            if (key === '.' && currentNum.includes('.')) {
                return;
            }
            
            if (currentNum === '0' || operator) {
                currentNum = '';
            }
            
            currentNum += key;
            displayValue.innerText = currentNum;
        } 
        else if (key === 'C') {
            currentNum = '0';
            firstNum = '';
            operator = '';
            displayValue.innerText = '0';
        } 
        else if (key === '=') {
            if (operator && firstNum) {
                let result = calculate(parseFloat(firstNum), operator, parseFloat(currentNum));
                displayValue.innerText = result;
                currentNum = result.toString();
                firstNum = '';
                operator = '';
            }
        } 
        else {
            operator = key;
            firstNum = currentNum;
            currentNum = '';
            document.querySelectorAll('.operator').forEach(item => {
                item.style.backgroundColor = '#E7E7E7';
            });
            event.target.style.backgroundColor = '#FA8664';
        }
    });

    function calculate(num1, operator, num2) {
        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        return result;
    }
});