import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';

import { Price } from './price.ts';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PriceService {
  private url = 'https://ffxiv-greed-party.herokuapp.com/api/prices/';

  constructor(private http: Http) { }

  getPrices(ldstId: string): Promise<Array<Price>> {
    return this.http.get( `${this.url}${ldstId}/`)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response) {
    return response.json();
  }

  handleError(err: any) {
    console.error('An error occurred', err);
    return Promise.reject(err.message || err);
  }
}
