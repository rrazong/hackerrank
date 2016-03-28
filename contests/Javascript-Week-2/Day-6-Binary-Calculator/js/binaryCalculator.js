(function (){
    var divResult = document.getElementById("res"),
        btnZero = document.getElementById("btn0"),
        btnOne = document.getElementById("btn1"),
        btnSum = document.getElementById("btnSum"),
        btnSub = document.getElementById("btnSub"),
        btnMul = document.getElementById("btnMul"),
        btnDiv = document.getElementById("btnDiv");
    
    var enterDigit = (function(div){
        var d = div;
        return function(){ 
            d.innerHTML = d.innerHTML + this.innerHTML;
        }
    })(divResult);
    
    btnZero.onclick = enterDigit;
    btnOne.onclick = enterDigit;
    btnSum.onclick = enterDigit;
    btnSub.onclick = enterDigit;
    btnMul.onclick = enterDigit;
    btnDiv.onclick = enterDigit;
    
    btnClr.onclick = (function(div){
        var d = div;
        return function() {
            d.innerHTML = '';
        };
    })(divResult);
    
    btnEql.onclick = (function(div){
        var d = div;
        return function() {
            var arr = d.innerHTML.match(/^(\d+)([^\d])(\d+)$/),
                operandA = parseInt(arr[1], 2),
                operator = arr[2],
                operandB = parseInt(arr[3], 2),
                result;

            switch(operator){
            case '+':
                result = operandA + operandB;
            break;
            case '-':
                result = operandA - operandB;
            break;
            case '*':
                result = operandA * operandB;
            break;
            case '/':
                result = operandA / operandB;
            break;
            default:
                // Unrecognized operator, do nothing, don't want to break tester.
                return;
            };

            d.innerHTML = result.toString(2);
        };
    })(divResult);
    
})();