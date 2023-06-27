import { CustomLogger } from '@/common/logger/custom-logger.helper';
import { ReadingService } from './reading.service';
import { getExtensionFile } from '@/common/utils/getExtensionFile.util';
import { ReadingCommand } from './reading.command';

jest.mock('@/common/logger/custom-logger.helper', () => ({
  CustomLogger: jest.fn().mockImplementation(() => ({
    debug: jest.fn(),
    table: jest.fn(),
    error: jest.fn(),
  })),
}));

jest.mock('./reading.service', () => ({
  ReadingService: jest.fn().mockImplementation(() => ({
    getListSuspicious: jest.fn().mockReturnValue(['suspiciousData']),
  })),
}));

jest.mock('@/common/utils/getExtensionFile.util', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getExtensionFile: jest.fn((_file: string) => {
    return 'CSV';
  }),
}));

describe('Test:reading:command', () => {
  let customLogger: CustomLogger;
  let readingService: ReadingService;
  let readingCommand: ReadingCommand;

  beforeEach(() => {
    customLogger = new CustomLogger();
    readingService = new ReadingService(customLogger);
    readingCommand = new ReadingCommand(customLogger, readingService);
  });

  it('run: should read the file and log the suspicious data', async () => {
    const options = { file: 'data.csv' };
    const expectedParameter = 'data.csv';

    await readingCommand.run([], options);

    expect(customLogger.debug).toHaveBeenCalledWith('Reading file: data.csv');
    expect(getExtensionFile).toHaveBeenCalledWith('data.csv');
    expect(readingService.getListSuspicious).toHaveBeenCalledWith(expectedParameter);
    expect(customLogger.table).toHaveBeenCalledWith(['suspiciousData']);
  });

  it('parseReading: should return the value as is', () => {
    const value = 'data.csv';
    const result = readingCommand.parseReading(value);
    expect(result).toEqual(value);
  });
});
