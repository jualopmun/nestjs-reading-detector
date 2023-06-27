import { Command, CommandRunner, Option } from 'nest-commander';
import { CustomLogger } from '@/common/logger/custom-logger.helper';
import { ReadingService } from './reading.service';
import { TypeFileEnum } from './enums/typeFile.enum';
import { getExtensionFile } from '@/common/utils/getExtensionFile.util';

type ReadingCommandOptions = {
  file: string;
};

@Command({ name: 'reading', description: 'A parameter parse' })
export class ReadingCommand extends CommandRunner {
  constructor(private readonly customLogger: CustomLogger, private readingService: ReadingService) {
    super();
  }

  async run(_passedParam: string[], options?: ReadingCommandOptions): Promise<void> {
    const { file } = options;
    try {
      this.customLogger.debug(`Reading file: ${file}`);
      const extensionFile = getExtensionFile(file).toUpperCase();
      if (!TypeFileEnum[extensionFile]) throw Error(`Error File ${file} not found`);
      const resultSuspicious = this.readingService.getListSuspicious(options.file);
      this.customLogger.table(resultSuspicious);
    } catch (error) {
      this.customLogger.error(error);
    }
  }

  @Option({
    flags: '-f, --file [file]',
    description: 'A type of file that you want read',
  })
  parseReading(val: string): string {
    return val;
  }
}
