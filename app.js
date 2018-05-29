var time = 0;

console.log(__dirname);
console.log(__filename);

console.log('Timer start');

setTimeout(function(){
    console.log('3 seconds have passed');
}, 1000);

console.log('Start a new timer start');


var timer = setInterval(function(){
    time += 1;
    console.log(time +' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }
    
},2000);

