import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.useGlobalPipes(new ValidationPipe()); // Classvalidator
  await app.setGlobalPrefix('api');

  await app.listen(process.env.PORTA_SERVIDOR);
}
bootstrap();
