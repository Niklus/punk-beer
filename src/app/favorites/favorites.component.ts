import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  public favorites: any = [];

  constructor(private databaseServive: DatabaseService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    this.databaseServive.getFromDataBase().then((data: any) => {
      this.favorites = data;
    });
  }
}
