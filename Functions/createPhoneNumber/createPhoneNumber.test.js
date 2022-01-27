import { createPhoneNumber } from './createPhoneNumber'

describe('createPhoneNumber', function () {
    test('should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', function () {
        const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        expect(result).toBe('(123) 456-7890')
    })
})