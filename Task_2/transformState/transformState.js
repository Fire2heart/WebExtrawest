export function transformState(state, transforms) {
    let arrRemove

    for (let i = 0; i < transforms.length; i++) {
        if (transforms[i].operation === 'clear') {
            const empty = {}
            state = empty
        }
        else if (transforms[i].operation === 'removeProperties') {
            for (let i = 0; i < transforms.length; i++) {
                arrRemove = transforms[i].properties
            }
            delete state[arrRemove]
        }
        else if (transforms[i].operation === 'addProperties') {
            state = Object.assign(state, transforms[i].properties)
        }
    }
    return state
}

// let state = { foo: 'bar', name: 'Jim', another: 'one' }
// const transforms =
//     [
//         { operation: 'removeProperties', properties: ['another'] },
//         { operation: 'clear' },
//         { operation: 'clear' },
//         { operation: 'clear' },
//         { operation: 'addProperties', properties: { yet: 'another property' } },
//         { operation: 'clear' },
//         { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } },
//         { operation: 'removeProperties', properties: ['name', 'hello'] }

//     ]

// for (let i = 0; i < transforms.length; i++) {
//     arrRemove = transforms[i].properties
//     for (d = 0; d < transforms[i].properties.length; d++) {
//         if (transforms[i].properties[d] !== 'name') {
//             delete transforms[i].properties[d]
//         }
//     }
//     delete state[arrRemove]
// }



//--------------------------------------



// console.log(arrRemove)
// delete state[arrRemove]
// console.log(state)

// let arrRemove

// for (let i = 0; i < transforms.length; i++) {
//     if (transforms[i].operation === 'clear') {
//         const empty = {}
//         state = empty
//     }
//     else if (transforms[i].operation === 'removeProperties') {
//         for (let i = 0; i < transforms.length; i++) {
//             arrRemove = transforms[i].properties
//         }
//         delete state[arrRemove]
//     }
//     else if (transforms[i].operation === 'addProperties') {
//         state = Object.assign(state, transforms[i].properties)
//     }
// }

// console.log(state)

// arrRemove = ['another']
// delete state[arrRemove]

// result = {}
// state = result
// console.log(state)

// console.log(state)
// console.log(Object.keys(arrRemove))

// delete state[Object.keys(arrRemove)]

// console.log(state)

// console.log(state)
// console.log(transforms[0].properties)
// Object.assign(state, transforms[0].properties)
// console.log(state)

// delete state
// console.log(state.name)
// console.log(arrRemove.name)
// console.log(transforms[0].properties)

// console.log(Object.is(state.name, arrRemove.name))

// delete state.another
// console.log(state)

// console.log(arrRemove)
// console.log(state)
// console.log(transforms[0].properties)
// console.log(JSON.stringify(state) === JSON.stringify(arrRemove))

// console.log(Object.keys(transforms[0].properties).length)
// console.log(Object.getOwnPropertyDescriptors(transforms[0].properties))
// console.log(Object.getOwnPropertyNames(transforms[0].properties))
// console.log(transforms[0].properties.foo)

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

