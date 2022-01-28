export function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()
    const new_str = str.split("").reverse().join("")
    return str === new_str
}