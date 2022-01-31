const state = { foo: 'bar', name: 'Jim', another: 'one' }
const transforms =
    [
        // { operation: 'addProperties', properties: { yet: 'another property' } },
        // { operation: 'clear' },
        // { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } },
        { operation: 'removeProperties', properties: { name: 'Jim', foo: 'bar' } },
        // { operation: 'addProperties', properties: { name: 'Petro' } }
    ]




for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].operation === 'clear') {
        console.log({})
    }
    else if (transforms[i].operation === 'removeProperties') {
        for (let e = 0; e < Object.keys(transforms[i].properties).length; e++) {
            console.log(transforms[i].properties[e])
        }
    }
}


// console.log(Object.keys(transforms[0].properties).length)
// console.log(Object.getOwnPropertyDescriptors(transforms[0].properties))
// console.log(Object.getOwnPropertyNames(transforms[0].properties))
// console.log(transforms[0].properties.foo)