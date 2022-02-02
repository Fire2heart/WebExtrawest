export const invertColor = (hex) => {
	let newHex = hex;

	if (newHex.length === 7 && newHex[0] === '#') {
		newHex = newHex.slice(1);

		return '#' + (Number(`0x${newHex}`) ^ 0xFFFFFF).toString(16).toLocaleLowerCase();
	}

	return 'Error';
};
