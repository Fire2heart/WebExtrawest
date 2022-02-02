import { isPrime } from './isPrime';

describe('isPrime', () => {
	test('should return true when passed 2', () => {
		const result = isPrime(2);

		expect(result).toBe(true);
	});

	test('should return true when passed 73', () => {
		const result = isPrime(73);

		expect(result).toBe(true);
	});

	test('should return false when passed 1', () => {
		const result = isPrime(1);

		expect(result).toBe(false);
	});

	test('should return false when passed 75', () => {
		const result = isPrime(75);

		expect(result).toBe(false);
	});

	test('should return false when passed -1', () => {
		const result = isPrime(-1);

		expect(result).toBe(false);
	});
});