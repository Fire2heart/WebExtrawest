import { swapCase } from './swapCase'

describe('swapCase', function () {
    test('should return AbC when passed "aBc"', function () {
        const result = swapCase('aBc')
        expect(result).toBe('AbC')
    })

    test('should return gOOd when passed "GooD"', function () {
        const result = swapCase('GooD')
        expect(result).toBe('gOOd')
    })

    test('should return HELLO when passed "hello"', function () {
        const result = swapCase('hello')
        expect(result).toBe('HELLO')
    })
})