import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    errorHandler: (err) => {
      console.error(err);
      process.exit(1);
    },
  });
}
bootstrap();
