import { transformState } from './transformState'

describe('transformState', function () {
    test('should work with a long list of operations', function () {
        const result = transformState({ foo: 'bar', name: 'Jim', another: 'one' },
            [
                { operation: 'addProperties', properties: { yet: 'another property' } },
                { operation: 'clear' },
                { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } }
            ]
        )
        expect(result).toBe({ foo: 'bar', name: 'Jim' })
    })

    test('should work with a long list of operations', function () {
        const result = transformState({},
            [
                { operation: 'addProperties', properties: { name: 'Jim' } },
            ]
        )
        expect(result).toBe({ foo: 'bar', name: 'Jim' })
    })

    test('should work with a long list of operations', function () {
        const result = transformState({ foo: 'bar', name: 'Jim', another: 'one' },
            [
                { operation: 'clear' },
            ]
        )
        expect(result).toBe({ foo: 'bar', name: 'Jim' })
    })

    test('should work with a long list of operations', function () {
        const result = transformState({ foo: 'bar', name: 'Jim', another: 'one' },
            [
                { operation: 'removeProperties', properties: ['another'] },
                { operation: 'clear' },
                { operation: 'clear' },
                { operation: 'clear' },
                { operation: 'addProperties', properties: { yet: 'another property' } },
                { operation: 'clear' },
                { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } },
                { operation: 'removeProperties', properties: ['name', 'hello'] }
            ]
        )
        expect(result).toBe({ foo: 'bar', name: 'Jim' })
    })
})