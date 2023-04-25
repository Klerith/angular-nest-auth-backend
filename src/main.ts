import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const PORT = process.env.PORT ?? 3000;
    
  console.log(`App corriendo en puerto: ${ PORT } `)

  await app.listen( PORT );
}
bootstrap();
