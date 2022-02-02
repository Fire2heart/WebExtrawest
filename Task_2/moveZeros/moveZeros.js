export const moveZeros = (arr) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			count++;
		}
	}

	const newArr = arr.filter(num => num !== 0);

	for (let i = 0; i <= count; i++) {
		newArr.push(0);
	}

	return newArr;
};
