import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carosul',
  templateUrl: './home-carosul.component.html',
  styleUrls: ['./home-carosul.component.css']
})
export class HomeCarosulComponent implements OnInit {

  images: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images = [1, 2, 3, 4].map(num => `assets/carosul${num}.webp`);
  }

}
