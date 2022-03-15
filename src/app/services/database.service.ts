import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable()
export class DatabaseService {
  private db: any = new Dexie('BeerDatabase');

  constructor() {
    this.db.version(1).stores({
      beers: `
        id,
        name
      `,
    });
  }

  getFromDataBase() {
    return this.db
      .transaction('r', this.db.beers, () => {
        return this.db.beers.toArray((beers: any) => {
          return beers;
        });
      })
      .catch((err: any) => {
        console.error(err.stack);
      });
  }

  addToDatabase(beer: any) {
    this.db
      .transaction('rw', this.db.beers, () => {
        this.db.beers.put(beer);
      })
      .then(() => {
        console.log('added to db');
      })
      .catch(function (err: any) {
        console.error(err.stack);
      });
  }

  delete(id: number) {
    this.db
      .transaction('rw', this.db.beers, () => {
        this.db.beers.where('id').equals(id).delete();
      })
      .then(() => {
        console.log('deleted from db');
      })
      .catch((err: any) => {
        console.error(err.stack);
      });
  }
}
