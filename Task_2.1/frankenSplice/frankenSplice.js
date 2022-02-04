export const frankenSplice = (arr1, arr2, index) => {
	arr2.splice(index, 0, ...arr1);

	return arr2;
};
