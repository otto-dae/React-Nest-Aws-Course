import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.allowedOrigin,
      credentials: true,
    }
  });
  app.use(cookieParser());
  const config = new DocumentBuilder()
     .setTitle('OXXO API')
     .setDescription('Api for OXXO')
     .setVersion('0.8')
     .addBearerAuth()
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))
  await app.listen(4000);
}
bootstrap();