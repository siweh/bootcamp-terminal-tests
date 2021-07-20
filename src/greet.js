module.exports = function(name){

    //Throw error if the passed argument is not a string
    if (typeof name !== "string"){
        throw TypeError('greet() expects a string')
    }

    if (name === undefined){
        throw TypeError('greet() expects a string');
    }
    return "Hello, " + name;
}