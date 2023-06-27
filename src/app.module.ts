import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ReadingModule } from './reading/reading.module';

@Module({
  imports: [ReadingModule],
  providers: [AppService],
})
export class AppModule {}
