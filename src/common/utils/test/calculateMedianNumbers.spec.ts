import { calculateMedianNumbers } from '../calculateMedianNumbers.util';

describe('Test:common:util:calculateMedianNumbers', () => {
  it('should calculate the median of an array impar', () => {
    const oddLengthArray = [1, 2, 3, 4, 5];
    expect(calculateMedianNumbers(oddLengthArray)).toBe(3);
  });

  it('should calculate the median of an array par', () => {
    const evenLengthArray = [1, 2, 3, 4];
    expect(calculateMedianNumbers(evenLengthArray)).toBe(2.5);
  });

  it('should calculate the median of an array empty', () => {
    const emptyArray: number[] = [];
    expect(calculateMedianNumbers(emptyArray)).toBeNaN();
  });

  it('should calculate the median of an array one element', () => {
    const singleElementArray = [10];
    expect(calculateMedianNumbers(singleElementArray)).toBe(10);
  });

  it('should calculate the median of an array elements duplicated', () => {
    const duplicateElementsArray = [5, 5, 3, 1, 2, 2, 4];
    expect(calculateMedianNumbers(duplicateElementsArray)).toBe(3);
  });
});
