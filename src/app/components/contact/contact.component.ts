import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/servises/flight.service';
import { Flight } from 'src/Classes/flight';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private servFlight:FlightService,
    private myRout:Router
    ) { }

    public allFlight:Flight[]=[]
    public filterFlights:Flight[]=[]
    public start:Date
    public end:Date
    public isGetFilter=false
    public CDate:Date=new Date()
    public isOpen:boolean=false
    public theFlight:Flight=new Flight()

    
  ngOnInit(): void {

    this.allFlight=this.servFlight.getFlights();
  }

    onSubmitFilter(){
    
      this.filterFlights=this.getFilterFlights(this.start,this.end)
      this.isGetFilter=true

    }

    getFilterFlights(stert:Date,end:Date):Flight[]{
      let tempFlight:Flight[]=[]
      let startDate = new Date(stert);
      let endDate = new Date(end);
      this.allFlight.forEach(f => {
        if(startDate<=f.date&&endDate>=f.date) tempFlight.push(f)
      });
      return tempFlight
    }

    onClickDetails(f:Flight){
        this.isOpen=true
        this.theFlight=f
    }

    order(){
      this.myRout.navigate(['Registration'])
    }

}
