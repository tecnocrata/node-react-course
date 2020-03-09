// Function Overloading
// Difference between previos and spread strategy

function greet(firstName, lastName, ...opts) {
  console.log(opts);
  const language = opts["language"] || "en";
  switch (language) {
    case "en":
      console.log("Hello " + firstName + " " + lastName);
      break;
    case "es":
      console.log("Hola " + firstName + " " + lastName);
      break;
    default:
      break;
  }
}

function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, { language: "en" });
}

function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, "es");
}

greet("Jorge", "lopez", "en");
greetEnglish("Maria", "Trigo");
greetSpanish("Gabriel", "Miranda"); // Error? How to fix this?
