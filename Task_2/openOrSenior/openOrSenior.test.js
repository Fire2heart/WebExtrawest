import { openOrSenior } from './openOrSenior';

describe('openOrSenior', () => {
	test('should return [Open, Senior, Open, Senior] when passed [[31, 10],[55,23],[20, 0],[41, 16]]', () => {
		const result = openOrSenior([[31, 10], [55, 23], [20, 0], [41, 16]]);

		expect(result).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
	});

	test('should return [Open, Open, Open, Open] when passed [[34, 11],[55,7],[39, 16],[38, 14]]', () => {
		const result = openOrSenior([[34, 11], [55, 7], [39, 16], [38, 14]]);

		expect(result).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
	});
});