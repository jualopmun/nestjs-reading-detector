import { calculateNumberSuspicious } from '../calculateNumberSuspicious.util';

describe('Test:reading:util:calculateNumberSuspicious', () => {
  it('should calculate the suspicious number range', () => {
    const numbers = [1, 2, 3, 4, 5];
    const porcent = 10;

    const minNumber = 2.7;
    const maxNumber = 3.3;

    const result = calculateNumberSuspicious(numbers, porcent);

    expect(result).toEqual({ minNumber, maxNumber });
  });

  it('should throw an error for an empty array', () => {
    const numbers: number[] = [];
    const porcent = 10;

    expect(() => {
      calculateNumberSuspicious(numbers, porcent);
    }).toThrowError('Numbers is empty');
  });

  it('should throw an error for a negative number', () => {
    const numbers = [1, 2, 3, 4, 5];
    const porcent = -10;

    expect(() => {
      calculateNumberSuspicious(numbers, porcent);
    }).toThrowError('Porcent not should be negative');
  });
});
