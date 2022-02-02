export const transformState = (state, transforms) => {
	let newState = state;

	for (let i = 0; i < transforms.length; i++) {
		if (transforms[i].operation === 'addProperties') {
			newState = Object.assign(newState, transforms[i].properties);
		}

		if (transforms[i].operation === 'clear') {
			newState = {};
		}

		if (transforms[i].operation === 'removeProperties') {
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