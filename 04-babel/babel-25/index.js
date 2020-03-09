let doWork = (name, ...numbers)=>{
    let result =0;
    console.log ('Processing for ${name}');
    numbers.forEach (n=>{
        result = result +n;
    });
    return result;
}

console.log (doWork('Enrique', 5,6,8,9,10));