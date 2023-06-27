import { calculateMedianNumbers } from '@/common/utils/calculateMedianNumbers.util';
import { Reading } from '../interfaces/reading.interface';
import { Suspicious } from '../interfaces/suspicious.interface';
import { calculateMinAndMax } from '@/common/utils/calculateMinAndMax.util';
import { getGroupBy } from '@/common/utils/getGroupBy.util';

type GroupByClient = {
  [client: string]: Reading[];
};

export function calculateSuspicious(readings: Reading[]): Suspicious[] {
  const groupByClient: GroupByClient = getGroupBy<Reading>(readings, 'client');
  const resultSuspicious: Suspicious[] = [];

  Object.keys(groupByClient).forEach((key) => {
    const getReadingNumber = groupByClient[key].map((client) => Number(client.reading));
    const calculateMedian = calculateMedianNumbers(getReadingNumber);
    const { minNumber, maxNumber } = calculateMinAndMax(calculateMedian, 50);
    const filterSuspcious: Suspicious[] = groupByClient[key]
      .filter((client: Reading) => Number(client.reading) <= minNumber || Number(client.reading) >= maxNumber)
      .map((client) => ({
        client: client.client,
        month: client.period,
        suspicious: Number(client.reading),
        median: calculateMedian,
      }));
    resultSuspicious.push(...filterSuspcious);
  });

  return resultSuspicious;
}
