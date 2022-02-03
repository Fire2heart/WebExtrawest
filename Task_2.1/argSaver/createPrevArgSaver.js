export const createPrevArgSaver = () => {
	let previousValue;

	return (nowValue) => {
		const result = previousValue;

		previousValue = nowValue;

		return result;
	};
};
