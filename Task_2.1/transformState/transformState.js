// const transformState = (state, transform) => {
// 	const operation = {
// 		add: 'addProperties', remove: 'removeProperties', clear: 'clear',
// 	};

// 	const result = transform.map((element) => {
// 		switch (element.operation) {

// 			case operation.add:
// 				const newObj = {
// 					...state, ...element.properties,
// 				};

// 				return newObj;

// 			// case operation.remove:
// 			// 	const newObj = element.properties.reduce((result, currentKey) => {

// 			// 		return result;
// 			// 	}, {})
// 		}
// 	});

// 	return result;
// };


const state = {
	foo: 'bar', bar: 'foo',
};
const transforms = {
	operation: 'addProperties', properties: { name: 'Jim' },
};

const operation = {
	add: 'addProperties', remove: 'removeProperties', clear: 'clear',
};

const result = transforms.map((element) => {
	if (element.properties === operation.add) {
		const obj = {
			...state, ...element.properties,
		};

		return obj;
	}

	return result;
});

// console.log(result)


// console.log(transformState({ foo: 'bar', bar: 'foo' }, {
// 	operation: 'addProperties', properties: { name: 'Jim' },
// }));
