import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/servises/client.service';
import { FlightService } from 'src/app/servises/flight.service';
import { Flight } from 'src/Classes/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isManager:boolean=this.servClients.isManager

 public allFlight:Flight[]
public isOpen:boolean=false
  

  constructor(private myRout:Router,
    private servClients:ClientService,
    private servFlight:FlightService
    ) {
   
  }


ngOnInit(): void {
  this.allFlight=this.servFlight.getFlights();
}


public onFlightClick(flight:Flight,index:number ){
this.servFlight.setSelectedFlight(flight)


this.allFlight.forEach(f=>{
  if(f.selected){
  f.selected=false}
}
  )
  this.allFlight[index].selected=true
}

public update(f:Flight){
  this.servFlight.updateFlight(f)
  }
  
  public delete(f:Flight){
   this.servFlight.deleteFlight(f)
  } 


 
 
}
