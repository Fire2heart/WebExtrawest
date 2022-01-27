export function alphabetPosition(str) {
    const arr_str = []
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()

    for (let i = 0; i < str.length; i++) {
        arr_str.push(str[i].charCodeAt(0) - 96)
    }

    return arr_str.join(' ')
}