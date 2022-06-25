import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {

  cards: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cards = ['Sofas', 'Beds', 'Dining Sets', 'Wardrobes', 'Ergonomic Chairs', 'Study Tables', 'Tv Units', 'Coffee Table', 'Bookshelves', 'Shoe Rocks'];
  }

}
