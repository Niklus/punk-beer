import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BeerService {
  beers = new BehaviorSubject([]);
  base_url = 'https://api.punkapi.com/v2';

  constructor(private http: HttpClient) {
    this.getBeers(1);
  }

  getBeers(page: number) {
    this.http
      .get(`${this.base_url}/beers?page=${page}&per_page=24`)
      .subscribe((data: any) => {
        this.beers.next(data);
      });
  }

  searchForBeer(beer: string) {
    this.http
      .get(`https://api.punkapi.com/v2/beers?beer_name=${beer}&per_page=24`)
      .subscribe((data: any) => {
        data.length > 0
          ? this.beers.next(data)
          : alert('Sorry didnt find that one');
      });
  }
}
