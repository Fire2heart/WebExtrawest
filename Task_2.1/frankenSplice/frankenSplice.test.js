import { frankenSplice } from './frankenSplice';

describe('frankenSplice', () => {
	test('should return [4, 1, 2, 3, 5]	when passed [1, 2, 3], [4, 5], 1', () => {
		const result = frankenSplice([1, 2, 3], [4, 5], 1);

		expect(result).toStrictEqual([4, 1, 2, 3, 5]);
	});

	test('should return  ///', () => {
		const result = frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2);

		expect(result).toStrictEqual(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
	});

	test('should return  [1, 2, 3, 4]	when passed [1, 2, 3, 4], [], 0', () => {
		const result = frankenSplice([1, 2, 3, 4], [], 0);

		expect(result).toStrictEqual([1, 2, 3, 4]);
	});

}); 