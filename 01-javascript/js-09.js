//Why the error?
var c = {
  name: "The object c",
  log: function() {
    this.name = "First update";
    console.log(this);

    var changeName = function(newvalue) {
      //THIS LINE CONTAINS THE JAVASCRIPT ERROR
      this.name = newvalue;
    };

    changeName("Updated again!");
    console.log(this);
  }
};

c.log();
