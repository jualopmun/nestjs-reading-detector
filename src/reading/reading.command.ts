import { Command, CommandRunner, Option } from 'nest-commander';
import { CustomLogger } from '@/common/logger/custom-logger.helper';

type ReadingCommandOptions = {
  file: string;
};

@Command({ name: 'reading', description: 'A parameter parse' })
export class ReadingCommand extends CommandRunner {
  constructor(private readonly customLogger: CustomLogger) {
    super();
  }

  async run(passedParam: string[], options?: ReadingCommandOptions): Promise<void> {
    this.customLogger.debug(options.file);
  }

  @Option({
    flags: '-f, --file [file]',
    description: 'A type of file that you want read',
  })
  parseReading(val: string): string {
    return val;
  }
}
