// complete the function
function vowelsAndConsonants(s) {
    var vowels={'a': true, 'e': true, 'i': true, 'o':true, 'u': true},
        v = [],
        c = [];
    s.split('').forEach(function(char){
        if(vowels[char]===undefined){
            c.push(char);
        } else {
            v.push(char);
        }
    });

    v.concat(c).forEach(function(char){
        console.log(char);
    });
}

