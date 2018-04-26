var counter = function(array1) {
    return 'There are ' + array1.length + ' elements inside the array';
}

var adder = function(a,b){
    return `The sum is = ${a+b}`;
};

var pi = 3.14;

module.exports = {
    counter: counter,
    adder: adder,
    pi:pi
}