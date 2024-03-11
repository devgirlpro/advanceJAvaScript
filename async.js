//Topic to Cover:
// 1- timeout & intervals
//2-  callbacks
//3-  promises
//4-  async await
//5-  Event loop
 

//the traditional methods javaScript has available for running code asynchronously
//setTimeout()  //setInterval()

//setTimeout()
//exexute a particular block of code after a specifid time has elapsed
//setTimeout(function, duration, param1, param2, ...)

function greet(name) {
    console.log(`Heloo ${name} after 2 second`)
}

// setTimeout(greet, 2000, 'lili');


//to clear a timeout(), use the clearTimeout()
const timeoutID = setTimeout(greet, 2000, 'lili');
clearTimeout(timeoutID )

//setInterval()
//setInterval(function, duration, param1, param2, ...)

function greet(name) {
    console.log(`hele ${name} after each 2 seconds`)
}


//setInterval(greet, 2000, 'lili')
//intervals keep runing a task forever=> should clear interval when appropriate
const intervalId = setInterval(greet, 2000, 'lili');
clearInterval(intervalId)