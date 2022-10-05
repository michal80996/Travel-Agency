import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Destinations, Flight } from 'src/Classes/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

private allFlight:Flight[]=[
  new Flight(true,1,"9999",Destinations.NewYork,new Date(2022,5,14),new Date().setHours(15,30),"must wear musk",85,true,10,false,'../assets/images/NY.jpg'),
  new Flight(false,2,"10241",Destinations.Paris,new Date(2022,8,1),new Date().setHours(5,30),"Over the age of 18 only",180,true,25,false,'../assets/images/paris.jpg'),
  new Flight(false,3,"58692",Destinations.Kanada,new Date(2024,5,6),new Date().setHours(6,30),"Special for Orthodox",75,true,5,false,'../assets/images/kanada.jpg'),
  new Flight(false,4,"10007",Destinations.Israel,new Date(2023,2,12),new Date().setHours(4,15),"Vaccination is required",56,true,15,false,'../assets/images/israel.jpg'),
  new Flight(false,5,"65200",Destinations.China,new Date(2022,12,30),new Date().setHours(11,50),"Vaccination is required",162,true,30,false,'../assets/images/china.jpg'),
  new Flight(false,6,"85896",Destinations.Japan,new Date(2023,5,19),new Date().setHours(9,20),"must wear musk",50,true,12,false,'../assets/images/japan.jpg'),
  new Flight(false,7,"47858",Destinations.Paris,new Date(2025,1,11),new Date().setHours(7,40),"must wear musk",80,true,10,false,'../assets/images/paris.jpg'),
  new Flight(false,8,"52523",Destinations.NewYork,new Date(2023,4,14),new Date().setHours(3,20),"Over the age of 18 only",150,true,8,false,'../assets/images/NY.jpg'),
  new Flight(false,9,"25541",Destinations.Russia,new Date(2023,4,14),new Date().setHours(3,20),"Over the age of 18 only",150,true,12,false,'../assets/images/russia.jpg'),
  new Flight(false,10,"54415",Destinations.Dubayy,new Date(2025,4,48),new Date().setHours(5,54),"Over the age of 18 only",80,true,10,false,'../assets/images/dubayy.jpg'),
  new Flight(false,11,"59666",Destinations.Dubayy,new Date(2022,6,4),new Date().setHours(4,23),"Over the age of 18 only",110,true,25,false,'../assets/images/dubayy.jpg'),
  new Flight(false,12,"77022",Destinations.Panama,new Date(2023,5,19),new Date().setHours(6,45),"Over the age of 18 only",160,true,40,false,'../assets/images/panama.jpg'),

]

private _singleFlighySubject:BehaviorSubject<Flight>=new BehaviorSubject(this.allFlight[0])
private newFlight:Flight=new Flight();

constructor() { }

public getSelectedFlight():Observable<Flight>{
  return this._singleFlighySubject.asObservable()
}

public setSelectedFlight(flight:Flight){
this._singleFlighySubject.next(flight)
}

public getFlights():Flight[]{
  return this.allFlight
}

public updateFlight(flight:Flight){
  this.newFlight={...flight}
}

public addFlight(f:Flight){
  this.allFlight.push(f);
}

public deleteFlight(f:Flight){
let index= this.allFlight.indexOf(f)
this.allFlight.slice(index,1);
}
}