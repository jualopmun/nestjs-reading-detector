import { Module } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { ReadingCommand } from './reading.command';
import { CustomLogger } from '@/common/logger/custom-logger.helper';

@Module({
  providers: [ReadingService, ReadingCommand, CustomLogger],
})
export class ReadingModule {}
