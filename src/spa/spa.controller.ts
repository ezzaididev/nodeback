import { clientseanceDto } from './../dto/clientseance.dto';
import { Controller, Get, Logger, Query, Param, HttpException, HttpStatus, Post, Body, Delete, Put } from '@nestjs/common';
import { SpaService } from './spa.service';
import { clientDto } from 'src/dto/client.dto';
import { ApiOperation  } from '@nestjs/swagger';

@Controller('')
export class SpaController {



    constructor(private readonly spaservice : SpaService){}
//All services
    @Get('service')
    getAllService(){
        Logger.log('get all service ' , 'blog controller');
      return this.spaservice.getService();
    }

//All séances
    @Get('seance')
    getAllSeance(){
        Logger.log('get all seance ' , 'blog controller');
      return this.spaservice.getSeance();
    }

//get seance by ID
//@ApiOperation({title : 'Afficher un article ...'})
//@ApiImplicitParam({name : 'idseance'})
@Get('seanceid/:idseance')
async getOne(@Param('idseance') idseance){  
  Logger.log('get une seance ' , 'blog controller');
   const seance = await this.spaservice.getOneSeance(idseance);
   if(seance)
   return seance;
   throw new HttpException('seance not found', HttpStatus.NOT_FOUND);
}
//Modifier le prix de la seance
@Put('seance/:idseance')
async updateSeance(@Param('idseance') idseance , @Body() seanceDto){
    Logger.log('update une seance ' , 'blog controller');
    const seance = await this.spaservice.updateSeance(idseance , seanceDto);
    if(seance)
     return seance;
     throw new HttpException(' not modified', HttpStatus.NOT_MODIFIED);
}

 //afficher les Séances par Services
 @Get('seance/:idservice')

 async getSeanceParservice(@Param('idservice') idservice){  
   Logger.log('get séances ' , 'blog controller');
  const service = await this.spaservice.getSeanceParservice(idservice);
  if(service)
  return service;
  throw new HttpException('service not found', HttpStatus.NOT_FOUND);
  
 }

 //AFFICHER TOUS LES  seances des clients
@Get('clientseance')
getAllclientseance(){
  return this.spaservice.getAllseanceforclient();
}

  //afficher les clients seances par id client
  @Get('clientSeance/:idclient')
  async getclientservicebyidclient(@Param('idclient') idclient){  
    
    const clientseance = await this.spaservice.getclientseancebyid(idclient);
    if(clientseance)
    return clientseance;
    throw new HttpException('client seance not found', HttpStatus.NOT_FOUND);
  }
 

 //ajouter un clients a des seance 
@Post('client/:idclient/:idseance')
async addclientseancet(@Param('idclient') idclient,@Param('idseance') idseance,@Body() clientseanceDto:clientseanceDto){
    //console.log(articledto);
    Logger.log('add  clientseance ' , 'blog controller');
    const clientseance = await this.spaservice.addcltToseance(idclient,idseance,clientseanceDto);
    if(clientseance)
     return clientseance;
     throw new HttpException(' not created', HttpStatus.NOT_MODIFIED);
}
 
//SUPPRIMER UNe  séance a un client
@Delete('clientSeance/:id')
async removeclientseance(@Param('id') id){
    Logger.log('remove un clientseance ' , 'blog controller');
    const clientseance = await this.spaservice.removeclientseance(id );
    if(clientseance)
     return clientseance;
     throw new HttpException(' not Found', HttpStatus.NOT_FOUND);

}


// Afficher tous les clients
 
@Get('client')
getAllClient(){
    Logger.log('get all client ' , 'blog controller');
  return this.spaservice.getClient();
}

//afficher le client par idclient
@Get('client/:idclient')
  async getOneClient(@Param('idclient') idclient){  
    Logger.log('get un client ' , 'blog controller');
     const client = await this.spaservice.getOneClient(idclient);
     if(client)
     return client;
     throw new HttpException('client not found', HttpStatus.NOT_FOUND);
  }

//Creer un client
  
@Post('client')
async createclient(@Body() clientdto : clientDto){
  console.log(clientdto);
    Logger.log('create un client ' , 'blog controller');
    const client = await this.spaservice.createClient(clientdto);
  if(client)
   return client;
     throw new HttpException(' not created', HttpStatus.NOT_MODIFIED);
}

//update client
@Put('client/:idclient')
async update(@Param('idclient') idclient , @Body() clientDto){
    Logger.log('update un Client ' , 'blog controller');
    const client = await this.spaservice.updateClient(idclient , clientDto);
    if(client)
     return client;
     throw new HttpException(' not modified', HttpStatus.NOT_MODIFIED);
}


//afficher le dernier client

@Get('lastclient')
getlastclient(){
  return this.spaservice.getlastclient();
}

@Get('lastidclient')
getlastidclient(){
  return this.spaservice.getlastidclient();
}
}
