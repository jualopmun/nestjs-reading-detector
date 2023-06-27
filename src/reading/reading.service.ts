import { readFilesData } from '@/common/utils/readFilesData.util';
import { Injectable } from '@nestjs/common';

import * as path from 'path';
import { getFileReadReadings } from './utils/getReadingsFiles.util';
import { Suspicious } from './interfaces/suspicious.interface';
import { CustomLogger } from '@/common/logger/custom-logger.helper';
import { calculateSuspicious } from './utils/calculateSuspicious.util';
import { getExtensionFile } from '@/common/utils/getExtensionFile.util';
@Injectable()
export class ReadingService {
  constructor(private readonly customLogger: CustomLogger) {}

  getListSuspicious(file: string): Suspicious[] {
    try {
      const url = path.join(process.cwd(), `./src/assets/files/${file}`);
      const data = readFilesData(url);
      const extension = getExtensionFile(file);
      const readings = getFileReadReadings[extension](data);

      return calculateSuspicious(readings);
    } catch (error) {
      this.customLogger.error(`Error in ReadingService:getListSuspicious ${error}`);
    }
  }
}
