import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() beer: any;
  @Input() favorites: any;

  constructor(private databaseServive: DatabaseService) {}

  ngOnInit(): void {}

  toggleFavorites(beer: any) {
    const found = this.favorites.find((el: any) => el.id === beer.id);
    if (found) {
      this.favorites.splice(this.favorites.indexOf(found), 1);
      this.databaseServive.delete(Number(beer.id));
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
