import { invertColor } from './invertColor'

describe('invertColor', function () {
    test('should return #ffffff when passed #000000', function () {
        const result = invertColor('#000000')
        expect(result).toBe('#ffffff')
    })

    test('should return #221155 when passed #DDEEAA', function () {
        const result = invertColor('#DDEEAA')
        expect(result).toBe('#221155')
    })

    test('should return #FEDCBA when passed #012345', function () {
        const result = invertColor('#012345')
        expect(result).toBe('#fedcba')
    })
})