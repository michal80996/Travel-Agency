import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from 'src/Classes/flight';

@Component({
  selector: 'app-managerial-update',
  templateUrl: './managerial-update.component.html',
  styleUrls: ['./managerial-update.component.scss']
})
export class ManagerialUpdateComponent implements OnInit {


@Input() once!:Flight;
@Output() newOnce=new EventEmitter<Flight>();
@Output() updateOnce=new EventEmitter<Flight>();

  constructor() { }



  ngOnInit(): void {
    
  }


  updateEmit(){
    console.log(this.once.code)
    this.updateOnce.emit(this.once)

  }

}
