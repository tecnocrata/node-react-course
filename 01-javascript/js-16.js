// CALL usage
// Llama la funcion pero al mismo tiempo enlaza una funcion hacia el contexto del objeto que se pasa como parametro

let person = {
  firsname: "Jhon",
  lastname: "Doe",
  getFullName: function() {
    const fullname = this.firsname + " " + this.lastname;
    return fullname;
  }
};

let logName = function(language) {
  console.log(language);
  console.log("Logged :" + this.getFullName());
};

logName.call(person, "es"); // you can add parameters that belongs to logName
