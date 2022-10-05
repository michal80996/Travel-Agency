import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/servises/client.service';
import { ClosedComponent } from '../closed/closed.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isActive:boolean=false
  public currentUser:string
  isManager:boolean=this.servClients.isManager

  constructor(private myRout:Router,
    private servClients:ClientService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
  this.currentUser=this.servClients.user
  }

 
 
  openMessages(){
    if(this.servClients.isManager)
      this.myRout.navigate(['Message'])
      else{
        const dialogRef = this.dialog.open(ClosedComponent, {
          width: '350px',
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 inHome(){
  this.myRout.navigate(['/Home'])

 }
   inSubscribe(){
     this.myRout.navigate(['/Registration'])
   }
 
   
  
   inContact(){
     this.myRout.navigate(['/Contact'])
   }

   inAddFlight(){
    this.myRout.navigate(['/Update'])

   }

   inCustomerServise(){
    this.myRout.navigate(['/Message'])
   }


 public toggleMenu():void{
    this.isActive=!this.isActive
    
  }



}
