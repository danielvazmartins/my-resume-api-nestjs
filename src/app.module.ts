import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from "typeorm";

import { UsersModule } from './users/users.module';
import { TemplateModule } from './template/template.module';
import { ResumesModule } from './resumes/resumes.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mongodb',
			host: 'localhost',
			port: 27017,
			database: 'my-resume',
			synchronize: true,
			autoLoadEntities: true
		}),
		UsersModule,
		TemplateModule,
		ResumesModule,
		AuthModule
	]
})
export class AppModule {
	constructor(
		private dataSource: DataSource
	) {}
}
