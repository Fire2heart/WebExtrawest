import { createUrl } from './createUrl'

describe('createUrl', function () {
    test('should return /api/0 when passed /api/{id}, {id: 0}', function () {
        const result = createUrl('/api/{id}', { id: 0 })
        expect(result).toBe('/api/0')
    })

    test('should return /api/undefined when passed /api/{id}, {name: Petya}', function () {
        const result = createUrl('/api/{id}', { name: 'Petya' })
        expect(result).toBe('/api/undefined')
    })

    test('should return /api/items/0 when passed /api/{list}/{id}, {list: items, id: 0}', function () {
        const result = createUrl('/api/{list}/{id}', { list: 'items', id: 0 })
        expect(result).toBe('/api/items/0')
    })
})