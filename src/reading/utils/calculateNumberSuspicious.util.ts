import { calculateMedianNumbers } from '@/common/utils/calculateMedianNumbers.util';
import { calculateMinAndMax } from '@/common/utils/calculateMinAndMax.util';

export function calculateNumberSuspicious(numbers: number[], porcent: number) {
  if (porcent < 0) throw Error('Porcent not should be negative');
  if (numbers.length === 0) throw Error('Numbers is empty');
  const calculateMedian = calculateMedianNumbers(numbers);
  return calculateMinAndMax(calculateMedian, porcent);
}
