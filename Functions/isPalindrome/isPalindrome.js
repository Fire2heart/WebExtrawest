export function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase()
    let new_str = str.split("").reverse().join("")
    return str === new_str
}