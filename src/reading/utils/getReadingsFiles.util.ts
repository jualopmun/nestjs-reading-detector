import { xml2js } from 'xml-js';
import { ReadingXML } from '../interfaces/readingXML.interface';
import { Reading } from '../interfaces/reading.interface';
import { TypeFileEnum } from '../enums/typeFile.enum';
import { csvToJSON } from '@/common/utils/csvToJSON.util';

function getReadingsForXml(xml: string): Reading[] {
  const data: ReadingXML = xml2js(xml, { compact: true }) as ReadingXML;

  const resultReading: Reading[] = data.readings.reading.map((read) => ({
    client: read._attributes.clientID,
    period: read._attributes.period,
    reading: read._text,
  }));

  return resultReading;
}

export const getFileReadReadings = {
  [TypeFileEnum.CSV]: (data: string) => csvToJSON<Reading>(data),
  [TypeFileEnum.XML]: (data: string) => getReadingsForXml(data),
};
