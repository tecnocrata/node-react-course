let doWork = function(x, y, z) {
    return x + y + z;
}

var result = doWork(...[1, 2, 3]);

console.log (result);
//==> 6


var a = [4, 5, 6, 0]; 
var b = [1, 2, 3, ...a, 7, 8, 9]; 

console.log (b);
//==> [1, 2, 3, 4, 5, 6, 0, 7, 8, 9]