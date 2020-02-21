let persona = {
  name: "Enrique",
  a: function a() {
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
};

persona.a();
