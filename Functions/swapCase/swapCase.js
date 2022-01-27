export function swapCase(str) {
    return str.replace(/./g, letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
}
