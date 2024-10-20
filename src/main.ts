import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import cookieParser from 'cookie-parser';



async function bootstrap() {
  const app = await NestFactory.create(AppModule , {
    cors: {
      origin: process.env.allowedOrigin,
      credentials: true
    }
  });

  app.use(cookieParser());
  const config = new DocumentBuilder()
  .setTitle('Ocso API')
  .setDescription('API for Oxxo')
  .setVersion('0.8')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,
    whitelist: true, 
    transform: true,
  }));
  await app.listen(4000);
}
bootstrap();
