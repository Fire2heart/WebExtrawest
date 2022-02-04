import { createAdder } from './createAdder';

describe('createAdder', () => {
	const adder1 = createAdder();
	const adder2 = createAdder(100);

	test('should return 0  ', () => {
		const result = adder1();

		expect(result).toBe(0);
	});

	test('should return 30  ', () => {

		adder1();

		const result = adder1(10, 20);

		expect(result).toBe(30);
	});

	test('should return 100  ', () => {

		adder1();

		const result = adder1(30, 40);

		expect(result).toBe(100);
	});

	test('should return 110  ', () => {

		const result = adder2(10);

		expect(result).toBe(110);
	});

	test('should return 200  ', () => {

		const result = adder2(20, 30, 40);

		expect(result).toBe(200);
	});

	test('should return 200  ', () => {

		const result = adder2();

		expect(result).toBe(200);
	});

});