import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes globais
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Inicia todos os microservices configurados nos módulos
  await app.startAllMicroservices();

  // Inicializa o HTTP server
  await app.listen(3000);
  console.log('Aplicação rodando em http://localhost:3000');
}
bootstrap();
