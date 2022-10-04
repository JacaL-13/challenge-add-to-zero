// Starting array
let array1 = [28, 43, -12, 30, 4, 0, 12]
let array2 = [1, 4, 11, 2, 37, -4]
let array3 = [0, 21, 33, 6, 0, -9]
let array4 = [0, 1, 2, 3, 4, 5] 

// Write your solution below:
// function arrayZero(array) {
//     let arrayZero = false
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j && array[i] + array[j] === 0) {
//                 arrayZero = true
//                 break
//             }
//         }
//         if (arrayZero === true) {
//             break
//         }
//     }
//     return arrayZero
// }

let arrayZero = (array) => {
        let arrayZeroTest = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === 0) {
                arrayZeroTest = true
                break
            }
        }
        if (arrayZeroTest === true) {
            break
        }
    }
    return arrayZeroTest
}

console.log(arrayZero(array1))
console.log(arrayZero(array2))
console.log(arrayZero(array3))
console.log(arrayZero(array4))