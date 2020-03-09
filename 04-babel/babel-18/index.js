//tagged templates
var person = 'Enrique';
var age = 28;

function myTag(strings, personExp, ageExp) {

    var str0 = strings[0]; // "that "
    var str1 = strings[1]; // " is a "

    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;

}

var output = myTag `that ${ person } is a ${ age }`;

console.log(output);
//=> that Enrique is a youngster