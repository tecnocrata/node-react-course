//import Person from '../../models/person';
let Person = require('../../models/person');

//export function createPerson (req, res) {
function createPerson (req, res) {
    console.log('Person ready');
    var enrique = new Person();      // create a new instance of the Person model
    enrique.name = req.body.name;  // set the person name (comes from the request)
    // save the bear and check for errors
    enrique.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Person created!' });
    });
}

//export function getPersons(req, res) {
function getPersons(req, res) {
    console.log('Getting Persons...');
    Person.find(function(err, persons) {
        if (err)
            res.send(err);

        res.json(persons);
    });
}

module.exports = {
    createPerson,
    getPersons
};