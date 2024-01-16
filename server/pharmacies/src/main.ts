import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()), // Use ExpressAdapter
  );

  app.enableCors(); // Enable CORS

  await app.listen(3000);
}
bootstrap();
