import { isPrime } from './isPrime'

describe('isPrime', function () {
    test('should return true when passed 2', function () {
        const result = isPrime(2)
        expect(result).toBe(true)
    })

    test('should return true when passed 73', function () {
        const result = isPrime(73)
        expect(result).toBe(true)
    })

    test('should return false when passed 1', function () {
        const result = isPrime(1)
        expect(result).toBe(false)
    })

    test('should return false when passed 75', function () {
        const result = isPrime(75)
        expect(result).toBe(false)
    })

    test('should return false when passed -1', function () {
        const result = isPrime(-1)
        expect(result).toBe(false)
    })
})