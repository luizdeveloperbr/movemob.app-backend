import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder} from  '@nestjs/swagger'
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const config = new DocumentBuilder()
    .setTitle('Inventory I.T')
    .setDescription('manager system for I.T equipament')
    .setVersion('1.0')
    .addTag('Subsidiary', 'Information about Subsidiaries')
    .addTag('Equipment','Computers, Monitors, Printers, ...')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.use(cookieParser());

  await app.listen(process.env.PORT);
}
bootstrap();
