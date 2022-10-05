import { Injectable } from '@angular/core';
import { Card, Client } from 'src/Classes/flight';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private client:Array<Client>=[
    new Client("menager","1111","aaa@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("michal","2222","bbb@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("ari","3333","ccc@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("chana","4444","ddd@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("batia","5555","eee@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("tomer","6666","fff@gmail.com",true,new Card(11545,458025415265,1205)),
    new Client("josef","7777","ggg@gmail.com",true,new Card(11545,458025415265,1205))
  ]

  private allMessages:string[]=[" קיימת הזמנה לרומא "," קיימת הזמנה לניורק "]
  public tempCity:string
  public user:string
  public isManager:boolean=false;

  
  constructor() { }

  onClickLogin(name:string,pass:string){
    if(name=="menager"&&pass=="1111")
    this.isManager=true
    else
    this.isManager=false
    this.user=name
  }

  getAllMessages():string[]{
    return this.allMessages
  }

   getAllClient():Array<Client>{
    return this.client;
  }

  addClient(c:Client,city:string){
    this.client.push(c)
    this.newMessage(city)
  }

newMessage(city:string){
 
    this.allMessages.push("קיימת הזמנה ל"+city)
  
}

contact(theComment:string){
  this.allMessages.push(theComment)
}

}
