export function basicOp(operation, a, b,) {
    //let calc = "a + operation + b"
    //return eval(calc)
    // if (operation == '+') { return a + b }
    // else if (operation == '-') { return a - b }
    // else if (operation == '*') { return a * b }
    // else if (operation == '/') { return a / b }
    // else { return 0 }

    // let result
    switch (operation) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default: return 0
            break
    }
}

export function StringMerge(first, second, letter) {
    let id = first.indexOf(letter)
    first = first.slice(0, id)
    id = second.indexOf(letter)
    second = second.slice(id + 1)

    return first + letter + second
}

export function createPhoneNumber(nums) {
    let beg = nums.slice(0, 3)
    let mid = nums.slice(3, 6)
    let end = nums.slice(6)

    return '(' + beg.join('') + ')' + ' ' + mid.join('') + '-' + end.join('')
}

export function getOperands(expression) {
    let space = ' '
    let arr = expression.split(space)
    let a = arr[0]
    let b = arr.pop()

    return 'a: ' + a + ',' + ' b: ' + b
}

export function getTime(str) {
    let result
    if (result = str.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)) {
        return result[0]
    }
    else {
        return ''
    }
    // let result = str.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)
    // return result[0]
}

export function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()
    let new_str = str.split("").reverse().join("")
    return str == new_str
}

export function swapCase(str) {
    return str.replace(/./g, c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
}



export function countOccurrences(word, letter) {
    let count = 0

    word = word.toLowerCase()
    letter = letter.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) { count++ }
    }

    return count
}


export function vowelCount(str) {
    let arr = str.match(/[aeiou]/gi);
    return arr === null ? 0 : arr.length;

    // let vowels = /[aeiou]/gi;
    // let result = str.match(vowels);
    // let count = result.length;
    // return count
}


export function alphabetPosition(str) {
    let arr = []
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i].charCodeAt(0) - 96)
    }

    return arr.join(' ')
}