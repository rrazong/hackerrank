function myFilter(my_array, callback){
    var arr=[];
    for (var i in my_array) {
        if(callback(my_array[i])) {
            arr.push(my_array[i]);
        }
    }
    return arr;
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray, function(x){return x%2 === 0}));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});

