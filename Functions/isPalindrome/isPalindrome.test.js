import { isPalindrome } from './isPalindrome'

describe('isPalindrome', function () {
    test('should return true when passed "Eva, can I see bees in a cave?"', function () {
        const result = isPalindrome('Eva, can I see bees in a cave?')
        expect(result).toBe(true)
    })

    test('should return false when passed "race a car"', function () {
        const result = isPalindrome('race a car')
        expect(result).toBe(false)
    })

    test('should return true when passed "Was it a cat I saw?"', function () {
        const result = isPalindrome('Was it a cat I saw?')
        expect(result).toBe(true)
    })
})