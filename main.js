//nested function scope
// const a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner()
// }

// outer()

//closure
function outer() {
    let counter = 0;
    function inner() {
        counter++
        console.log(counter)
    }
    inner()
}

// outer()
// outer()


function outer2() {
    let counter2 = 0;
    function inner2() {
        counter2++
        console.log(counter2)
    }
    return inner2
}



const fn = outer2()
fn()
fn()
fn()
fn()

//Function Currying
//function f(a, b, c) is transformed to f(a)(b)(c)

function sum(a, b, c) {
    return a + b + c
}

console.log("sum(2, 3, 5) => ", sum(2, 3, 5))

//sum(2, 3, 5) => sum(2)(3)(5)
function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log("curriedSum =>", curriedSum(2)(3)(5))