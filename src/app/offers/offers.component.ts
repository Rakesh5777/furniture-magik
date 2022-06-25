import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: string[] = [];
  bags: { name: string, price: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.offers = [1, 2, 3, 4].map(num => `../../assets/offer${num}.webp`);
    this.bags = [
      { name: 'Temple Units', price: 2800 },
      { name: 'Bean Bags', price: 1409 },
      { name: 'Hammocks', price: 799 },
      { name: 'Kids Furnitures', price: 839 },
      { name: 'Lights', price: 275 },
      { name: 'Swings', price: 678 },
      { name: 'Sofa Cum Beds', price: 17560 },
      { name: 'Bunk Beds', price: 18600 }
    ]
  }

}
