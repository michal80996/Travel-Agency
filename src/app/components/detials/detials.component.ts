import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { observable, Subscription } from 'rxjs';
import { ClientService } from 'src/app/servises/client.service';
import { FlightService } from 'src/app/servises/flight.service';
import { Destinations, Flight } from 'src/Classes/flight';

@Component({
  selector: 'app-detials',
  templateUrl: './detials.component.html',
  styleUrls: ['./detials.component.scss']
})
export class DetialsComponent implements OnInit ,OnDestroy{
  @ViewChild('f') form:NgForm
  
  public oneFlight:Flight
  public isMenage:boolean=this.servClient.isManager
  public isUpdate:boolean=false
  public cntClick:number=0
  public newFlight:Flight=new Flight()
  public theOption:string
  public index:number

  public isAdd:boolean=false
  public select=[]
  destination=Destinations
  

private subscription:Subscription=new  Subscription()
city: FormControl;

  constructor(private myRout:Router,
 private servFlight:FlightService,
 private servClient:ClientService)
 { 
  this.select = Object.keys(this.destination).filter(f => !isNaN(Number(f)));

 }

ngOnInit(): void {

  this.subscription.add(
    
  this.servFlight.getSelectedFlight().subscribe(data=>
  this.oneFlight=data)
 )

}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}


 order(){
  this.servClient.tempCity=this.oneFlight.destination
  this.myRout.navigate(['Registration'])
}

onDeleteClick(){
  if(this.servClient.isManager){
    this.oneFlight.isArcived=true
  this.cntClick=0
}
}

onAddClick(){
  if(this.servClient.isManager)
  {this.newFlight=new Flight()

  this.isAdd=true
  this.isUpdate=false
  }

}

addFlight(){
  if(this.form.valid){
    this.newFlight.destination=Destinations[this.theOption]
    this.servFlight.addFlight(this.newFlight)
  this.isAdd=false
  this.newFlight=new Flight()
}
}

onUpdateClick(){
  if(this.servClient.isManager){

  this.isAdd=false
 
  this.isUpdate=true
  this.newFlight={...this.oneFlight}
  this.index=this.servFlight.getFlights().indexOf(this.oneFlight)
  }
}

updateEvent(f:Flight){

this.servFlight.getFlights()[this.index]=f
this.newFlight=new Flight()

this.isUpdate=false

}

cencel(){
  this.isAdd=false
  this.isUpdate=false
}
}

