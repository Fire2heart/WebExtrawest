export function vowelCount(str) {
    const arr_vowel = str.match(/[aeiou]/gi);
    return arr_vowel === null ? 0 : arr_vowel.length;
}