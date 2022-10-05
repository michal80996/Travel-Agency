import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from 'src/app/servises/client.service';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.scss']
})
export class ClosedComponent implements OnInit {

  public comment:string

  constructor(private servClient:ClientService,
    public dialog:MatDialog) { }
    @ViewChild('f') form:NgForm

  ngOnInit(): void {
  }

  sendMessege(theComment:string):void{
    if(this.form.valid)
      this.servClient.contact(theComment)
    this.dialog.closeAll()
  }

}
