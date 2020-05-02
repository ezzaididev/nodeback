import { ServiceEntity } from 'src/entity/service.entity';

import{BaseEntity , Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { ClientseanceEntity } from './clientseance.entity';
 


//import {Tmarque} from "./marque";
@Entity('T_seance')
export class SeanceEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    idseance :number;

    @Column()
    nomSeance :String;

    @Column()
    prixSeance :String;
   
    @ManyToOne(type => ServiceEntity, services => services.seances )
    services : ServiceEntity;

 
@OneToMany(type => ClientseanceEntity, clientseances => clientseances.seances)
    @JoinColumn()
    clientseances : ClientseanceEntity;

 //   @ManyToOne(type => CategorieEntity, categorie => categorie.candidats )
   // categorie : CategorieEntity;
  }