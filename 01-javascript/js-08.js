// 'this' meaning
function a() {
  console.log(this);

  function x() {
    console.log("inside x..");
    console.log(this);
  }

  var y = function() {
    console.log("inside y..");
    console.log(this);
  };

  x();
  y();
}

var b = function() {
  console.log(this);
};

a();
b();
