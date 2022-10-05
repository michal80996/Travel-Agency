import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/servises/client.service';

@Component({
  selector: 'app-managerial-message',
  templateUrl: './managerial-message.component.html',
  styleUrls: ['./managerial-message.component.scss']
})
export class ManagerialMessageComponent implements OnInit {

  constructor(
    private servClient:ClientService
  ) { }

  public allMessges:string[]

  
  ngOnInit(): void {
    this.allMessges=this.servClient.getAllMessages()
  }

}
