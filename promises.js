// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isReady = [true, false][Math.floor(Math.random() * 2)]
//         isReady ? resolve("supe is resdy") : reject("supe is not ready")
//     }, 1000)
// })
// console.log(promise1
//     .then(value => console.log(value))
//     .catch(value => console.log(value))
// )

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const ready = [true, false][Math.floor(Math.random() * 2)]
//         // console.log(ready)
//         ready ? resolve("true broh") : reject("false broh");
//     }, 1000)
// })

// console.log(promise2
//     .then(value => console.log(value))
//     .catch(value => console.log(value))
// )



// //callback

// function one(sum){
//     console.log(sum)
// }

// function add(a,b,myCallback){
//     const total = a + b
//     return myCallback(total)
// }
// add(5,5,one)


const datas = [
    { name: 'utu', work: 'frontEnd Developer' },
    { name: 'anna', work: 'cafe' },
    { name: 'hrushi', work: 'SAP' },
]

function getData() {
    setTimeout(() => {
        let output = ""
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}


function newData(newD) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newD)
            let result = true
            if (result == true) {
                resolve();
            }
            else {
                reject("kush sahi nahi he bha i");
            }
        }, 2000)
    })
}
newData({ name: 'vahini', work: "developer" })
    .then(getData)
    .catch(err => console.log(err))