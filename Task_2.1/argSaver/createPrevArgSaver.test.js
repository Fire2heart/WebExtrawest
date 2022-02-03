import { createPrevArgSaver } from './createPrevArgSaver';

describe('createPrevArgSaver', () => {
	test('should return first argument from the previous call', () => {
		const argSaver = createPrevArgSaver();
		const result = argSaver(123);

		expect(result).toBe(undefined);
	});

	test('should return first argument from the previous call', () => {
		const argSaver = createPrevArgSaver();

		argSaver(123);

		const result = argSaver(456);

		expect(result).toBe(123);
	});

	test('should return first argument from the previous call', () => {
		const argSaver = createPrevArgSaver();

		argSaver(123);
		argSaver(456);

		const result = argSaver(100, 200, 300);

		expect(result).toBe(456);
	});

	test('should return first argument from the previous call', () => {
		const argSaver = createPrevArgSaver();

		argSaver(123);
		argSaver(456);
		argSaver(100, 200, 300);

		const result = argSaver();

		expect(result).toBe(100);
	});

	test('should return first argument from the previous call', () => {
		const argSaver = createPrevArgSaver();

		argSaver(123);
		argSaver(456);
		argSaver(100, 200, 300);
		argSaver();

		const result = argSaver(741);

		expect(result).toBe(undefined);
	});

});