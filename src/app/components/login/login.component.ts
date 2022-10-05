import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/servises/client.service';
import { Client } from 'src/Classes/flight';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servClients:ClientService,
    private rout:Router,
    public dialog:MatDialog) { }

    @ViewChild('f') form:NgForm
  newName:string
  password:string


  checkClient(){

    if(this.form.valid){
      this.servClients.user=this.newName
      console.log(this.servClients.user)
      this.servClients.onClickLogin(this.newName,this.password)
      this.rout.navigate(['Menu'])
      this.dialog.closeAll()
     
    }
  }

  ngOnInit(): void {
  }

}
