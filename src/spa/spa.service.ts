import { ClientseanceEntity } from './../entity/clientseance.entity';
import { ClientEntity } from './../entity/client.entity';
import { clientseanceDto } from './../dto/clientseance.dto';
import { SeanceEntity } from 'src/entity/seance.entity';
import { ServiceEntity } from 'src/entity/service.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { clientDto } from 'src/dto/client.dto';
import { seanceDto } from 'src/dto/seance.dto';
import { from } from 'rxjs';

@Injectable()
export class SpaService {

    constructor(
    
        @InjectRepository(ServiceEntity)
        private readonly serviceRepository:Repository<ServiceEntity>  ,
        @InjectRepository(SeanceEntity)
        private readonly seanceRepository:Repository<SeanceEntity>,
        @InjectRepository(ClientEntity)
        private readonly clientRepository:Repository<ClientEntity> ,
        @InjectRepository(ClientseanceEntity)
        private readonly clientseanceRepository:Repository<ClientseanceEntity>  
    ){}

//Afficher tous les services
    getService( ){
        return this.serviceRepository.find({
           // relations: ['seances']
        })

        }


        //Afficher tous les Séances
    getSeance(  ){
        return this.seanceRepository.find(
            { 
                relations: ['services']  
           });
    }

    //Afficher le sséance par id 
    async getOneSeance(idseance : number){
        const seance = await  this.seanceRepository.findOne(idseance);
        if(seance)
        return seance ;
        return null;
    }
    /****************UPDATE SEANCE************************************* */
async updateSeance(idseance: number , seancedto : seanceDto){

    const seance = await this.seanceRepository.findOne(idseance);
    
    if(!seance)
    return null;
    
    await this.seanceRepository.update(idseance , seancedto);
    return await this.seanceRepository.findOne(idseance);
    }


//AFFICHER LES Séances par services
async getSeanceParservice(idservice:number){

    return  this.seanceRepository.find(
        {
            where:{
              services:idservice
            },
            relations: [ 'services']
        }         
   );
     
  }

  //Afficher tous les clients et les séances affecté
  getAllseanceforclient(): Promise<ClientseanceEntity[]> {
    return  this.clientseanceRepository.find({relations: ['clients','seances']} );
}

   //AFFICHER les client seance par id client
   async getclientseancebyid(idclient:number){
    return  this.clientseanceRepository.find(
        {
            where:{
               clients:idclient
            },
            relations: ['clients','seances']
        }
         
   );
  
  }

    
  //Ajouter un client a une séance 
  async addcltToseance(idclient,idseance,clientseancedto :clientseanceDto){
    
    const client = await this.clientRepository.findOne(idclient);
   const seance = await this.seanceRepository.findOne(idseance);
     if(!client&&!seance)
     return null ;

    const clientseance = new ClientseanceEntity();
    
    clientseance.clients=client;
    clientseance.seances=seance;
  
    clientseance.dateNow=clientseancedto.dateNow
  //  clientseance.prixtotal=clientseancedto.prixtotal 
   // clientseance.nbr=clientseancedto.nbr
  

     return this.clientseanceRepository.save(clientseance);
     
}




 //SUPPRIMER  Client seance
async removeclientseance(id:number){
    const clientseance = await this.clientseanceRepository.findOne(id);
    if(!clientseance)
    return null;
    this.clientseanceRepository.remove(clientseance);
   return clientseance;
}



//get all clients
 getClient( ){
     return this.clientRepository.find(
         { 
      
         });
        }
    
//get one clients
  async getOneClient(idclient : number){
      const client = await  this.clientRepository.findOne(idclient);
        if(client)
        return client ;
         return null;
        }

//Ajouter un client
async createClient(clientdto : clientDto){
  
    const client = await this.clientRepository.save(clientdto); 
    return client;
 }

 //update client
 async updateClient(idclient: number , clientdto : clientDto){

    const client = await this.clientRepository.findOne(idclient);
    
    if(!client)
    return null;
    
    await this.clientRepository.update(idclient , clientdto);
    return await this.clientRepository.findOne(idclient);
    }

//get last client added
getlastclient(){
    return  this.clientRepository.find({
        order: {
            idclient: 'DESC'
         },
         take: 1
       
         }); 
}
 



//get last client added
async getlastidclient(){
         
        const client = await this.clientRepository
        .createQueryBuilder("client")
        .select('DISTINCT(`idclient`)')
         
        .getCount();
       
        return client ;
    }

 }
