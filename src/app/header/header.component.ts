import { Component } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public beer: string = '';

  constructor(private beerService: BeerService) {}

  onSubmit(event: any) {
    event.preventDefault();
    if (this.beer) {
      this.beerService.searchForBeer(this.beer);
      this.beer = '';
    }
  }
}
