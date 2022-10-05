import { Component, Input, OnInit } from '@angular/core';
import { Jewelry } from 'src/classes/Jewelr';

@Component({
  selector: 'app-jewel',
  templateUrl: './jewel.component.html',
  styleUrls: ['./jewel.component.scss']
})
export class JewelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Input()
  thisJewelry!: Jewelry;
}
