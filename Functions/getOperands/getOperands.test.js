import { getOperands } from './getOperands'

describe('getOperands', function () {
    test('should return "a: 1, b: 2" when passed "1 + 2"', function () {
        const result = getOperands('1 + 2')
        expect(result).toBe('a: 1, b: 2')
    })

    test('should return "a: 1.2, b: -3.4" when passed "1.2 * -3.4"', function () {
        const result = getOperands('1.2 * -3.4')
        expect(result).toBe('a: 1.2, b: -3.4')
    })

    test('should return "a: 1, b: 2" when passed "1 - 2"', function () {
        const result = getOperands('1 - 2')
        expect(result).toBe('a: 1, b: 2')
    })

    test('should return "a: 1, b: -2" when passed "1 - -2"', function () {
        const result = getOperands('1 - -2')
        expect(result).toBe('a: 1, b: -2')
    })
})