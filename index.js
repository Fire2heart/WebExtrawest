export function basicOp(operation, a, b,) {
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

export function stringMerge(first, second, letter) {
    let id = first.indexOf(letter)
    first = first.slice(0, id)
    id = second.indexOf(letter)
    second = second.slice(id + 1)

    return first + letter + second
}

export function createPhoneNumber(nums) {
    const beg = nums.slice(0, 3)
    const mid = nums.slice(3, 6)
    const end = nums.slice(6)

    return '(' + beg.join('') + ')' + ' ' + mid.join('') + '-' + end.join('')
}

export function getOperands(expression) {
    const space = ' '
    const arr_expression = expression.split(space)
    const a = arr_expression[0]
    const b = arr_expression.pop()

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
}

export function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()
    let new_str = str.split("").reverse().join("")
    return str === new_str
}

export function swapCase(str) {
    return str.replace(/./g, letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
}



export function countOccurrences(word, letter) {
    let count = 0

    word = word.toLowerCase()
    letter = letter.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) { count++ }
    }

    return count
}


export function vowelCount(str) {
    const arr_vowel = str.match(/[aeiou]/gi);
    return arr_vowel === null ? 0 : arr_vowel.length;
}


export function alphabetPosition(str) {
    const arr_str = []
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()

    for (let i = 0; i < str.length; i++) {
        arr_str.push(str[i].charCodeAt(0) - 96)
    }

    return arr_str.join(' ')
}