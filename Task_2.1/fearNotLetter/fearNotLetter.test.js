import { fearNotLetter } from './fearNotLetter';

describe('calculateRentalCost', () => {
  test('should return d when passed abce', () => {
    const result = fearNotLetter('abce');

    expect(result).toBe('d');
  });

  test('should return i when passed abcdefghjklmno', () => {
    const result = fearNotLetter('abcdefghjklmno');

    expect(result).toBe('i');
  });

  test('should return u when passed stvwx', () => {
    const result = fearNotLetter('stvwx');

    expect(result).toBe('u');
  });

  test('should return undefined when passed abcdefghijklmnopqrstuvwxyz', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');

    expect(result).toBe(undefined);
  });

});