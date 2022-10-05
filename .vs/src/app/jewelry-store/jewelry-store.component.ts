import { Component, OnInit } from '@angular/core';
import { Jewelry } from 'src/classes/Jewelr';
import { listMaterial } from 'src/classes/Jewelr';
@Component({
  selector: 'app-jewelry-store',
  templateUrl: './jewelry-store.component.html',
  styleUrls: ['./jewelry-store.component.scss']
})
export class JewelryStoreComponent implements OnInit {
enum=listMaterial;
  constructor() { }

  ngOnInit(): void {
  }

myJewelry:Jewelry[]=[
  new Jewelry(1,"necklaceDiamond","necklace",listMaterial.gold,'../assets/img/1.jpg'),
  new Jewelry(2,"necklaceDiamond","necklace",listMaterial.silver,'../../src/assets/img/1.jpg'),
  new Jewelry(1,"necklaceDiamond","necklace",listMaterial.bronze,'../../src/assets/img/1.jpg')

]
}
