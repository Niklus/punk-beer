import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public beers: any = [];
  public page: number = 1;
  public favorites: any = [];

  constructor(
    private beerService: BeerService,
    private databaseServive: DatabaseService
  ) {}

  ngOnInit() {
    this.databaseServive.getFromDataBase().then((data: any) => {
      this.favorites = data;
    });
    this.beerService.beers.subscribe((data: any) => {
      this.beers = data;
    });
  }

  nextPage() {
    this.page += 1;
    this.beerService.getBeers(this.page);
    this.scrollToTop();
  }

  previousPage() {
    this.page -= 1;
    this.beerService.getBeers(this.page);
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
}
