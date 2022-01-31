export function moveZeros([]) {
    const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            count++
        }
    }

    const newArr = arr.filter(num => num !== 0)

    for (let i = 0; i <= count; i++) {
        newArr.push(0)
    }
    return newArr
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))  //  [false,1,1,2,1,3,"a",0,0]
