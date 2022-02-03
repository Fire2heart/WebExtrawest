export const invertObject = (obj) => {
	const ret = {};

	Object.keys(obj).forEach(key => {
		for (let i = 0; i < Object.values(obj).length; i++) {
			if (Array.isArray(Object.values(obj)[i])) {
				return null;
			}
			ret[obj[key]] = key;
		}
	});


	return ret;
};