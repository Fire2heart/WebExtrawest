export const createAdder = (startValue) => {
	let sum = 0;

	if (startValue !== undefined) {
		sum = startValue;
	}

	return (...args) => {
		for (const arg of args) {
			sum += arg;
		}

		return sum;
	};
};
