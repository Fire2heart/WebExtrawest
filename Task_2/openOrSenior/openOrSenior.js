export const openOrSenior = (arr) => {
	const EXP = 15;
	const AGE = 40;
	const newArr = arr.map(([age, exp]) => {
		if (age >= AGE && exp >= EXP) {
			return 'Senior';
		}

		return 'Open';
	});

	return newArr;
};
