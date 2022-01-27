import { vowelCount } from './vowelCount'

describe('vowelCount', function () {
    test('should return 5 when passed "abracadabra"', function () {
        const result = vowelCount('abracadabra')
        expect(result).toBe(5)
    })

    test('should return 2 when passed "letter"', function () {
        const result = vowelCount('letter')
        expect(result).toBe(2)
    })

    test('should return 1 when passed "toy"', function () {
        const result = vowelCount('toy')
        expect(result).toBe(1)
    })

    test('should return 0 when passed "555"', function () {
        const result = vowelCount('555')
        expect(result).toBe(0)
    })
})