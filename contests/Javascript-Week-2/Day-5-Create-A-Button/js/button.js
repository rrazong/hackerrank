(function() {
    var btn=document.getElementById('btn');
    btn.innerHTML = '0';
    btn.onclick = function(event) {
        event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
    };
})();