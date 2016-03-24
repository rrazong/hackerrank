(function() {
    var middleBtn = document.getElementById('btn5');
    function getBtnValue(btnId) {
        return parseInt(document.getElementById(btnId).innerHTML);
    }
    function setBtnValue(btnId, value) {
        document.getElementById(btnId).innerHTML = value;
    }
    middleBtn.onclick = function() {
        var previous = getBtnValue('btn1');
        setBtnValue('btn1', getBtnValue('btn4'));
        setBtnValue('btn4', getBtnValue('btn7'));
        setBtnValue('btn7', getBtnValue('btn8'));
        setBtnValue('btn8', getBtnValue('btn9'));
        setBtnValue('btn9', getBtnValue('btn6'));
        setBtnValue('btn6', getBtnValue('btn3'));
        setBtnValue('btn3', getBtnValue('btn2'));
        setBtnValue('btn2', previous);
    }
})();