import { Reading } from '@/reading/interfaces/reading.interface';
import { calculateSuspicious } from '../calculateSuspicious.util';

describe('Test:reading:util:calculateSuspicious', () => {
  it('should calculate the suspicious readings', () => {
    const readings: Reading[] = [
      { client: '1', period: '2016-01', reading: '5' },
      { client: '1', period: '2016-02', reading: '1500' },
      { client: '2', period: '2016-03', reading: '5' },
      { client: '2', period: '2016-04', reading: '2500' },
    ];

    const result = calculateSuspicious(readings);

    expect(result).toEqual([
      { client: '1', month: '2016-01', suspicious: 5, median: 752.5 },
      { client: '1', month: '2016-02', suspicious: 1500, median: 752.5 },
      { client: '2', month: '2016-03', suspicious: 5, median: 1252.5 },
      { client: '2', month: '2016-04', suspicious: 2500, median: 1252.5 },
    ]);
  });

  it('should calculate the suspicious result empty', () => {
    const readings: Reading[] = [
      { client: '1', period: '2016-01', reading: '1400' },
      { client: '1', period: '2016-02', reading: '1500' },
      { client: '2', period: '2016-03', reading: '2400' },
      { client: '2', period: '2016-04', reading: '2500' },
    ];

    const result = calculateSuspicious(readings);

    expect(result).toEqual([]);
  });
});
