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