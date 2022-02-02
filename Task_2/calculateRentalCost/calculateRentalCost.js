export const calculateRentalCost = (days) => {
	const price = 40;
	const saleOne = 20;
	const saleTwo = 50;

	if (days < 3) {
		return price * days;
	} else if (days > 2 && days < 7) {
		return price * days - saleOne;
	} else if (days > 6) {
		return price * days - saleTwo;
	}
};