import { ClientseanceEntity } from './clientseance.entity';
 
 

import{BaseEntity , Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
 

 
@Entity('T_client')
export class ClientEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    idclient :number;

   

    @Column()
    prixtotal :String;

    @OneToMany(type => ClientseanceEntity, clientseances => clientseances.clients)
    @JoinColumn()
    clientseances : ClientseanceEntity;

   
   
   // @ManyToOne(type => ServiceEntity, services => services.seances )
   // services : ServiceEntity;
}
 

 //   @ManyToOne(type => CategorieEntity, categorie => categorie.candidats )
   // categorie : CategorieEntity;
 