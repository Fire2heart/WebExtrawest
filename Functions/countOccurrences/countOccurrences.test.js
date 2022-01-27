import { countOccurrences } from './countOccurrences'

describe('countOccurrences', function () {
    test('should return 2 when passed "ability", "i"', function () {
        const result = countOccurrences('ability', 'i')
        expect(result).toBe(2)
    })

    test('should return 1 when passed "ability", "i"', function () {
        const result = countOccurrences('abc', 'a')
        expect(result).toBe(1)
    })

    test('should return 1 when passed "ability", "i"', function () {
        const result = countOccurrences('ABC', 'a')
        expect(result).toBe(1)
    })
})