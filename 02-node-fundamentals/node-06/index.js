numberFormatter = require('number-formatter');

let value = numberFormatter( "#,##0.####", 1234567.890 );
console.log(value);