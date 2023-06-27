import { csvToJSON } from '../csvToJSON.util';

describe('Test:common:util:csvToJSON', () => {
  it('should convert a CSV string to an array of JSON objects', () => {
    const csv = `client,period,reading
1,2016-01,1234
2,2016-01,1234
3,2016-01,1234`;

    const result = csvToJSON(csv);

    const compareToResult = [
      { client: '1', period: '2016-01', reading: '1234' },
      { client: '2', period: '2016-01', reading: '1234' },
      { client: '3', period: '2016-01', reading: '1234' },
    ];

    expect(result).toEqual(compareToResult);
  });

  it('should handle empty lines correctly', () => {
    const csv = `client,period,reading
1,2016-01,1234
    
3,2016-01,1234`;

    const result = csvToJSON(csv);

    const compareToResult = [
      { client: '1', period: '2016-01', reading: '1234' },
      { client: '3', period: '2016-01', reading: '1234' },
    ];

    expect(result).toEqual(compareToResult);
  });

  it('should handle missing values correctly', () => {
    const csv = `client,period,reading
1,2016-01
2,2016-01
3,2016-01,1234`;

    const result = csvToJSON(csv);

    const compareToResult = [
      { client: '1', period: '2016-01' },
      { client: '2', period: '2016-01' },
      { client: '3', period: '2016-01', reading: '1234' },
    ];

    expect(result).toEqual(compareToResult);
  });
});
