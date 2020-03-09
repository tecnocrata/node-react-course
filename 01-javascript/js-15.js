// BIND usage
// Enlaza una funcion hacia el contexto del objeto que se pasa como parametro

let person = {
  firsname: "Jhon",
  lastname: "Doe",
  getFullName: function() {
    const fullname = this.firsname + " " + this.lastname;
    return fullname;
  }
};

let logName = function() {
  console.log("Logged :" + this.getFullName());
};

logFullName = logName.bind(person);

//logName();
logFullName();
