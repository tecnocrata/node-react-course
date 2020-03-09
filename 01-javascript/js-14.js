// Callbacks

function first(cb) {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
    cb();
  }, 500);
}
function second() {
  console.log(2);
}
first(function() {
  second();
});
