export const transformState = (state, transforms) => {
	let newState = state;
	const operationAdd = 'addProperties';
	const operationClear = 'clear';
	const operationRemove = 'removeProperties';

	for (let i = 0; i < transforms.length; i++) {
		if (transforms[i].operation === operationAdd) {
			newState = Object.assign(newState, transforms[i].properties);
		}

		if (transforms[i].operation === operationClear) {
			newState = {};
		}

		if (transforms[i].operation === operationRemove) {
			const arrRemove = Object.values(transforms[i].properties);

			if (arrRemove.length > 1) {
				for (let d = 0; d < arrRemove.length; d++) {
					const removeElement = arrRemove[d];

					delete newState[removeElement];
				}
			}
			delete newState.arrRemove;
		}
	}

	return newState;
};