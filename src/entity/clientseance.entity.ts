import { SeanceEntity } from 'src/entity/seance.entity';
 
 

import{BaseEntity , Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { ClientEntity } from "./client.entity";
import { Transform } from 'stream';
import { format } from 'path';
import { type } from 'os';
 

 
@Entity('T_clientseance')
export class ClientseanceEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id :number;

    
 //@CreateDateColumn({ type: "date" })
    @Column( { type: "date" } )
      dateNow :Date;

   // @Column()
  //  prixtotal :String;

  //  @Column()
   // nbr :number;

    @ManyToOne(type => ClientEntity, clients => clients.clientseances)
    clients : ClientEntity;

    @ManyToOne(type => SeanceEntity, seances => seances.clientseances)
    @JoinColumn()
    seances : SeanceEntity;

   
   
   // @ManyToOne(type => ServiceEntity, services => services.seances )
   // services : ServiceEntity;
}
 

 //   @ManyToOne(type => CategorieEntity, categorie => categorie.candidats )
   // categorie : CategorieEntity;
 