export const squareList = (badNums) => {
	const goodNums = badNums.filter(num => num > 0 && Number.isInteger(num));
	const result = goodNums.map(num => Math.pow(num, 2));

	return result;
};