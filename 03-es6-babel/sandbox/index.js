
class Person {
    constructor (name){
        this.name = name;
    }
}
function* jsRocksIsAwesome() {
  yield "JS Rocks is Awesome";
  yield "JS Rocks says JavaScript Rocks";
  return "because JavaScript really rocks";
}



var jsRocks = jsRocksIsAwesome();

console.log(jsRocks.next());
console.log(jsRocks.next());
console.log(jsRocks.next());

var enrique = new Person('Enrique');
console.log (enrique.name);


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved after 2 seconds');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();



  console.log(['a', 'b', 'c'].includes('d'));