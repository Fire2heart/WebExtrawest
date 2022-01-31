function openOrSenior([age, exp]) {
    const arr = [[age, exp]]
    const newArr = arr.map(function ([age, exp]) { //arr???
        if (age > 39 && exp > 15) {
            return 'Senior'
        }
        else if (age < 1 || exp < 1) {
            return 'Invalid'
        }
        return 'Open'
    })
}

console.log(openOrSenior([[31, 10], [55, 23], [20, 0], [41, 16]]))// ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[34, 11], [55, 7], [39, 16], [38, 14]]))// ['Open', 'Open', 'Open', 'Open']


// const arr = [[34, 11], [55, 7], [39, 16], [38, 14]]
// const newArr = arr.map(function ([age, exp]) {
//     if (age > 39 && exp > 15) {
//         return 'Senior'
//     }
//     else if (age < 1 || exp < 1) {
//         return 'Invalid'
//     }
//     return 'Open'
// })
