export function countOccurrences(word, letter) {
    let count = 0

    word = word.toLowerCase()
    letter = letter.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) { count++ }
    }

    return count
}