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
  console.log(`Heloo ${name} after 2 second`);
}

// setTimeout(greet, 2000, 'lili');

//to clear a timeout(), use the clearTimeout()
const timeoutID = setTimeout(greet, 2000, 'lili');
clearTimeout(timeoutID);

//setTimeout act like setIntervals
// setTimeout(function run(name) {
//     console.log(`hello ${name}`)
//     setTimeout(run, 1000, 'Rosi')
// }, 1000, 'Rosi')

//setInterval()
//setInterval(function, duration, param1, param2, ...)

function greet(name) {
  console.log(`hele ${name} after each 2 seconds`);
}

//setInterval(greet, 2000, 'lili')
//intervals keep runing a task forever=> should clear interval when appropriate
const intervalId = setInterval(greet, 2000, 'lili');
clearInterval(intervalId);

//Callbacks
//1- function can be passt as a argument to a function
//2- a function be return as avlaue from other functions

//1-
function greet(name) {
  console.log(`hello ${name}`);
}

function greeting(greetFn) {
  const name = 'lili';
  greetFn(name);
}

greeting(greet);

// any function that is passed as an argument to another function is called a callback function in js
//the function which accepts a function as an argument or return a funcrion is called a higher order function


//callback function types
//1- synchronouse callback: executed immediatly *sort *map *filter
//2- asynchronouse callback: after some time has passed. some event has occured or some data has been fetched
   // used to delay the execution of a function until a particular time or event has occured
   //*datafetching *setTimeout() (as ahigher order function) *eventhandels

   //callbacks problem is getting Callback hell, Promisses come to help

   //Promises: an object in javaScript
   //a promise is always in one of the three state
   //1- pending : initial state, neither fulfilledd nor rejected
   //2- fulfilleed: operation completed successfully
   //3- rejected: operation failed

   //why use Promise?
   // promise helps deal with asynchronouse code in a far more simpler way compare to callback
   // callback hell can be avoided with Promises


   //async await
//    async function greet() {
//     return (
//         console.log("ASYNC GREET FUNCTION")
//     )
//    }

//    greet()

async function greet() {
    return Promise.resolve("ASYNC FUNCTION")
}

greet()
.then((value) => console.log(value))
.catch((error) => console.log("async error =>", error))


//sync await
// async function fetchdata() {
//     try {
//         const users = await fetchUsers('api/users/...')
//         const description = await fetchDescription('api/users/Descrip/...')
//         console.log("DISPLAY DAT =>", result)
//     } catch (error) {
//         console.log("Display Error =>", error)
//     }
// }
