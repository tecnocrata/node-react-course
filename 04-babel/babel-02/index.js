//Using Destructuring
let calculateMonthlyPayment = function(principal, years, rate) {
  let monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return { principal, years, rate, monthlyPayment, monthlyRate };
  //   return {
  //     principal: principal,
  //     years: years,
  //     rate: rate,
  //     monthlyPayment: monthlyPayment,
  //     monthlyRate: monthlyRate
  //   };
};

let result = calculateMonthlyPayment(10, 20, 0.5);
let { monthlyPayment, monthlyRate } = result; //Destructuring

console.log(result);
console.log(result.monthlyPayment);
console.log(monthlyRate);
