import { Component } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public beer: string = '';
  public url: string = '';

  constructor(private beerService: BeerService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.url = event.url;
      }
    });
  }

  onSubmit(event: any) {
    event.preventDefault();
    if (this.beer) {
      this.beerService.searchForBeer(this.beer);
      this.beer = '';
    }
  }

  checkUrl() {
    console.log(this.router.url);
  }
}
