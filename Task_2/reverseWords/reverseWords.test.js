import { reverseWords } from './reverseWords'

describe('reverseWords', function () {
    test('should return "elbuod  secaps" when passed "double  spaces"', function () {
        const result = reverseWords('double  spaces')
        expect(result).toBe('elbuod  secaps')
    })

    test('should return 100 when passed "The quick brown fox jumps over the lazy dog."', function () {
        const result = reverseWords('The quick brown fox jumps over the lazy dog.')
        expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
    })
})