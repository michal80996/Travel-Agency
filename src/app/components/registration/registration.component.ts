import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/servises/client.service';
import { Card, Client } from 'src/Classes/flight';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private servClient:ClientService,
    private rout:Router) { }

  @ViewChild('f') form:NgForm

  newName:string
  advertisements:boolean
  newEmail:string
  newPass:string
  cardNum:number=1010
  cardDate:number=100000000000
  cardId:number=100000000
  isKosher:boolean
  
 

  addClient(){

    if(this.form.valid){
     let newCard=new Card(this.cardId,this.cardNum,this.cardDate);

    let c=new Client(this.newName,this.newPass,this.newEmail,this.advertisements,newCard)
    
    this.servClient.addClient(c,this.servClient.tempCity)
    this.servClient.tempCity=""
      this.rout.navigate([''])
    }
  }
  ngOnInit(): void {
  }

}
