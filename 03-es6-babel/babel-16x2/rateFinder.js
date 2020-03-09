let file = "rates.json";

//Please complete this file in order to read rates.json and build a html response
//TIP: You will need to use readFile method
...readFile(file, (err, data) => {
  if (err) throw err;
  let rates = JSON.parse(data);
  let html = '';
  rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
  console.log(html);
});


