import { ClientseanceEntity } from './../entity/clientseance.entity';
import { ClientEntity } from './../entity/client.entity';
import { SeanceEntity } from 'src/entity/seance.entity';
import { ServiceEntity } from 'src/entity/service.entity';
import { Module } from '@nestjs/common';
import { SpaController } from './spa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaService } from './spa.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([ServiceEntity , SeanceEntity, ClientEntity , ClientseanceEntity])
      ],
  controllers: [SpaController],
  providers: [ SpaService]
})
export class SpaModule {}
