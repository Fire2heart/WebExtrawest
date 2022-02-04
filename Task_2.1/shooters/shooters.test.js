import { makeArmy } from './shooters';

describe('makeArmy', () => {
	const shooters = makeArmy(10);

	test('should return it`s position in array', () => {
		const result = shooters[0]();

		expect(result).toBe(0);
	});

	test('should return it`s position in array', () => {
		const result = shooters[5]();

		expect(result).toBe(5);
	});

	test('should return it`s position in array', () => {
		const result = shooters[9]();

		expect(result).toBe(9);
	});

});