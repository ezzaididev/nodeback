import { SpaController } from './spa/spa.controller';
import { Module } from '@nestjs/common';
 import { TypeOrmModule } from '@nestjs/typeorm';
 
import { typeOrmOptions } from './config/typeorm.config';
import { SpaService } from './spa/spa.service';
import { SpaModule } from './spa/spa.module';

@Module({
  imports: [ 
            TypeOrmModule.forRoot(typeOrmOptions),
            SpaModule],
  controllers: [ ],
  providers: [  ],
})
export class AppModule {}
