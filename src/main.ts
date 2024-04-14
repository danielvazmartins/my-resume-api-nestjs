import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configOpenAPI = new DocumentBuilder()
    	.setTitle('My Resume')
		.setDescription('My Resume App API com NestJs')
		.setVersion('1.0')
		.addTag('my_resume')
		.build();
	const document = SwaggerModule.createDocument(app, configOpenAPI);
	SwaggerModule.setup('swagger-ui', app, document);

	await app.listen(3000);
}
bootstrap();
