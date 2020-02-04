let number, origin, destination;

module.exports.setNumber = function(num){
    number= num;
};

exports.setOrigin = function(o){
    origin= o;
};

module.exports.setDestination = function(d){
    destination= d;
};

exports.getInfo = function(){
    return {
        number,
        origin,
        destination
    }
}