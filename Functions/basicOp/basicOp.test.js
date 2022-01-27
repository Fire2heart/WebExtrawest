import { basicOp } from './basicOp'

describe('basicOp', function () {
    test('should return 4 when passed +, 2, 2', function () {
        const result = basicOp('+', 2, 2)
        expect(result).toBe(4)
    })

    test('should return -3 when passed -, 15, 18', function () {
        const result = basicOp('-', 15, 18)
        expect(result).toBe(-3)
    })

    test('should return 25 when passed *, 5, 5', function () {
        const result = basicOp('*', 5, 5)
        expect(result).toBe(25)
    })

    test('should return 7 when passed /, 49, 7', function () {
        const result = basicOp('/', 49, 7)
        expect(result).toBe(7)
    })

    test('should return 0 when passed any, 45, 45', function () {
        const result = basicOp('something else', 45, 45)
        expect(result).toBe(0)
    })
})