import * as mortgage from './mortgage';

//Here there is at least one issue, even after use babel, you need fix that

let {monthlyPayment, monthlyRate, amortization} = 
    mortgage.calculateAmortization(principal, years, rate);