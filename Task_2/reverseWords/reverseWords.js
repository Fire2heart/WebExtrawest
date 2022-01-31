export function reverseWords(str) {
    const arr = str.split(' ')
        .map(word => word.split("")
            .reverse().join(""))
        .filter(element => element !== ' ')
        .join(' ')
    return arr
}