// Callbacks
// WHY!!???

function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();

// WHAT IF I WANNA EXECUTE IN ORDER!?
