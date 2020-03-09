//Downgrade node to 4.2 LTS && run babel
//Please run with node 12.x also and compare
//Afterwards configure Babel
let calculateMonthlyPayment = function(principal, years, rate) {
  let monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return monthlyPayment;
};

let result = calculateMonthlyPayment(100000, 25, 0.5);
console.log(result);
