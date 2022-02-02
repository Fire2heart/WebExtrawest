import { createAdder } from './createAdder';

describe('calculateRentalCost', () => {
	test('should return 0  ', () => {
		const adder1 = createAdder();
		const result = adder1();

		expect(result).toBe(0);
	});

	test('should return 30  ', () => {
		const adder1 = createAdder();

		adder1();

		const result = adder1(10, 20);

		expect(result).toBe(30);
	});

	test('should return 100  ', () => {
		const adder1 = createAdder();

		adder1();
		adder1(10, 20);

		const result = adder1(30, 40);

		expect(result).toBe(100);
	});

	test('should return 110  ', () => {
		const adder2 = createAdder(100);

		const result = adder2(10);

		expect(result).toBe(110);
	});

	test('should return 200  ', () => {
		const adder2 = createAdder(100);

		adder2(10);

		const result = adder2(20, 30, 40);

		expect(result).toBe(200);
	});

	test('should return 200  ', () => {
		const adder2 = createAdder(100);

		adder2(10);
		adder2(20, 30, 40);

		const result = adder2();

		expect(result).toBe(200);
	});

});