import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() beer: any;
  @Input() favorites: any;
  @Output() removedFromFavorites = new EventEmitter();

  constructor(private databaseServive: DatabaseService) {}

  toggleFavorites(beer: any) {
    const index = this.favorites.findIndex((el: any) => el.id === beer.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.databaseServive.delete(Number(beer.id));
      this.removedFromFavorites.emit('beer removed');
    } else {
      this.favorites.push(beer);
      this.databaseServive.addToDatabase(beer);
    }
  }

  checkExistence(beer: any) {
    const found = this.favorites.find((el: any) => el.id === beer.id);
    return found ? true : false;
  }
}
