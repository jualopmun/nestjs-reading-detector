type MinAndMax = {
  minNumber: number;
  maxNumber: number;
};

export function calculateMinAndMax(number: number, porcent: number): MinAndMax {
  const minNumber = number - (number * porcent) / 100;
  const maxNumber = number + (number * porcent) / 100;

  return { minNumber, maxNumber };
}
