import { TypeFileEnum } from '@/reading/enums/typeFile.enum';
import { getFileReadReadings } from '../getReadingsFiles.util';

describe('Test:reading:util:getReadingsFile', () => {
  it('should convert XML to an array of Reading objects', () => {
    const xml =
      '<readings><reading clientID="1" period="2016-01">10</reading><reading clientID="2" period="2016-01">20</reading></readings>';

    const result = getFileReadReadings[TypeFileEnum.XML](xml);

    expect(result).toEqual([
      { client: '1', period: '2016-01', reading: '10' },
      { client: '2', period: '2016-01', reading: '20' },
    ]);
  });

  it('should return an array of Reading objects for CSV file', () => {
    const csvData = 'client,period,reading\n1,2016-01,30\n2,2016-02,40';
    const result = getFileReadReadings[TypeFileEnum.CSV](csvData);

    expect(result).toEqual([
      { client: '1', period: '2016-01', reading: '30' },
      { client: '2', period: '2016-02', reading: '40' },
    ]);
  });

  it('should return an array of Reading objects for XML file', () => {
    const xmlData =
      '<readings><reading clientID="1" period="2016-01">10</reading><reading clientID="2" period="2016-02">20</reading></readings>';
    const result = getFileReadReadings[TypeFileEnum.XML](xmlData);

    expect(result).toEqual([
      { client: '1', period: '2016-01', reading: '10' },
      { client: '2', period: '2016-02', reading: '20' },
    ]);
  });
});
