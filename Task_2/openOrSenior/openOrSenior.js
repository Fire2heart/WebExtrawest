export const openOrSenior = (arr) => {
	const newArr = arr.map(([age, exp]) => {
		if (age > 39 && exp >= 15) {
			return 'Senior';
		}

		return 'Open';
	});

	return newArr;
};
