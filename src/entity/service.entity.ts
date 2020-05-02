import { SeanceEntity } from 'src/entity/seance.entity';

import{BaseEntity , Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
 


//import {Tmarque} from "./marque";
@Entity('T_service')
export class ServiceEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    idservice :number;

    @Column()
    nomService :String;
   
  
    @OneToMany(type => SeanceEntity, seances => seances.services )
    seances : SeanceEntity[];


 //   @ManyToOne(type => CategorieEntity, categorie => categorie.candidats )
   // categorie : CategorieEntity;
}