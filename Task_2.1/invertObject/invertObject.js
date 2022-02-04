export const invertObject = (obj) => {
	const result = {};

	Object.keys(obj).forEach(key => {
		for (let i = 0; i < Object.values(obj).length; i++) {
			if (Array.isArray(Object.values(obj)[i])) {
				return null;
			}
			result[obj[key]] = key;
		}
	});


	return result;
};