// Function Overloading Best practice
function foo(a, b, opts) {
  // ...
  if (opts["test"]) {
  } //if test param exists, do something..
}

foo(1, 2, { method: "add" });
foo(3, 4, { test: "equals", bar: "tree" });
