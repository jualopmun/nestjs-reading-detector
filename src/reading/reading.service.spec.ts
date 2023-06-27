/* eslint-disable @typescript-eslint/no-unused-vars */
import { CustomLogger } from '@/common/logger/custom-logger.helper';
import { calculateSuspicious } from './utils/calculateSuspicious.util';
import { getExtensionFile } from '@/common/utils/getExtensionFile.util';
import { ReadingService } from './reading.service';

jest.mock('@/common/logger/custom-logger.helper', () => ({
  CustomLogger: jest.fn().mockImplementation(() => ({
    error: jest.fn(),
  })),
}));

jest.mock('@/common/utils/readFilesData.util', () => ({
  readFilesData: jest.fn((_path: string) => {
    return 'CSV data';
  }),
}));

jest.mock('./utils/getReadingsFiles.util', () => ({
  getFileReadReadings: {
    CSV: jest.fn().mockImplementation((_data: string) => {
      return ['reading1', 'reading2'];
    }),
  },
}));

jest.mock('@/common/utils/getExtensionFile.util', () => ({
  getExtensionFile: jest.fn((_file: string) => {
    return 'CSV';
  }),
}));

jest.mock('./utils/calculateSuspicious.util', () => ({
  calculateSuspicious: jest.fn((_readings: string[]) => {
    return ['suspiciousData'];
  }),
}));

describe('ReadingService', () => {
  let customLogger: CustomLogger;
  let readingService: ReadingService;

  beforeEach(() => {
    customLogger = new CustomLogger();
    readingService = new ReadingService(customLogger);
  });

  describe('getListSuspicious', () => {
    it('should read the file, parse the readings, and calculate the suspicious data', () => {
      const file = 'data.csv';

      const result = readingService.getListSuspicious(file);

      expect(getExtensionFile).toHaveBeenCalledWith(file);
      expect(calculateSuspicious).toHaveBeenCalledWith(['reading1', 'reading2']);
      expect(result).toEqual(['suspiciousData']);
    });
  });
});
