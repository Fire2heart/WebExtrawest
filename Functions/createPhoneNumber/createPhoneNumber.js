export function createPhoneNumber(nums) {
    const beg = nums.slice(0, 3)
    const mid = nums.slice(3, 6)
    const end = nums.slice(6)

    return '(' + beg.join('') + ')' + ' ' + mid.join('') + '-' + end.join('')
}