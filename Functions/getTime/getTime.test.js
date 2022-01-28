import { getTime } from './getTime'

describe('getTime', function () {
    test('should return "09:00" when passed "Breakfast at 09:00"', function () {
        const result = getTime('Breakfast at 09:00')
        expect(result).toBe('09:00')
    })

    test('should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:60, Dinner at 21:00')
        expect(result).toBe('21:00')
    })

    test('should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', function () {
        const result = getTime('Breakfast at 09:59, Dinner at 21:00')
        expect(result).toBe('09:59')
    })

    test('should return "" when passed "Breakfast at Dinner at"', function () {
        const result = getTime('Breakfast at Dinner at')
        expect(result).toBe('')
    })

    test('should return "" when passed "When pass string Breakfast at 09:69, Dinner at 25:00, then get empty string"', function () {
        const result = getTime('When pass string Breakfast at 09:69, Dinner at 25:00, then get empty string')
        expect(result).toBe('')
    })
})