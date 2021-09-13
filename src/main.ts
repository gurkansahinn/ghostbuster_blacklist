import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));
  app.useGlobalPipes(new ValidationPipe());

  const documentBuilder = new DocumentBuilder()
    .setTitle('Ghostbuster - Blacklist')
    .setVersion(process.env.VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
