import { calculateMinAndMax } from '../calculateMinAndMax.util';

describe('Test:common:util:calculateMinAndMax', () => {
  it('should calculate the minimum and maximum numbers based on a percentage', () => {
    const number = 100;
    const percentage = 20;
    const result = calculateMinAndMax(number, percentage);

    expect(result.minNumber).toBe(80);
    expect(result.maxNumber).toBe(120);
  });

  it('should handle negative numbers correctly', () => {
    const number = -50;
    const percentage = 50;
    const result = calculateMinAndMax(number, percentage);

    expect(result.minNumber).toBe(-25);
    expect(result.maxNumber).toBe(-75);
  });

  it('should handle zero correctly', () => {
    const number = 0;
    const percentage = 10;
    const result = calculateMinAndMax(number, percentage);

    expect(result.minNumber).toBe(0);
    expect(result.maxNumber).toBe(0);
  });

  it('should handle floating-point numbers correctly', () => {
    const number = 10.5;
    const percentage = 25;
    const result = calculateMinAndMax(number, percentage);

    expect(result.minNumber).toBe(7.875);
    expect(result.maxNumber).toBe(13.125);
  });
});
