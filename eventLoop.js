//synchronous code 
// console.log("FIRST")
// console.log("SECOND")
// console.log("THIRED")


//Async setTimeout code
// console.log("FIRST")

// setTimeout(() => {
//     console.log("SECOND")
// }, 2000)

// console.log("THIRED")



// console.log("FIRST")

// setTimeout(() => {
//     console.log("SECOND")
// }, 0)

// console.log("THIRED")




// setTimeout(() => {
//     console.log("SECOND")
// }, 0)

// console.log("FIRST")

// console.log("THIRED")


//Async Promise

//  console.log("FIRST")

// const promise = fetch('https://www.udemy.com/vishwas')
// promise.then(value => {
//     console.log('promise value is =>', value)
// })
// promise.catch(error => {
//     console.log("Error is =>", error)
// })

// console.log("SECOND")

// Async setTimeout + Promise code
setTimeout(() => {
    console.log('FIRST')
}, 0)

const promise = fetch('https://www.udemy.com/vishwas')
promise.then(value => {
    console.log("Promise value is =>", value)
})
promise.catch(error => {
    console.log("YOU GOT THIS ERROR => ", error)
})

let i = 0
while(i < 1000000000 ){
    i++
}

console.log('SECOND')
