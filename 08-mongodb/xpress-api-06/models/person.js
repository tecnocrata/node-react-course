let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

var PersonSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Person', PersonSchema);