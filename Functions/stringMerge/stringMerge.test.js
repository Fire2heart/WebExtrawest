import { stringMerge } from './stringMerge'

describe('stringMerge', function () {
    test('should return held when passed "hello", "world", "l"', function () {
        const result = stringMerge("hello", "world", "l")
        expect(result).toBe('held')
    })

    test('should return codinywhere when passed "coding", "anywhere", "n"', function () {
        const result = stringMerge("coding", "anywhere", "n")
        expect(result).toBe('codinywhere')
    })

    test('should return jasamson when passed "jason", "samson", "s"', function () {
        const result = stringMerge("jason", "samson", "s")
        expect(result).toBe('jasamson')
    })

    test('should return wondeople when passed "wonderful", "people", "e"', function () {
        const result = stringMerge("wonderful", "people", "e")
        expect(result).toBe('wondeople')
    })
})