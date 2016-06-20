import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';

import { Raid } from './raid';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RaidService {
  private url = 'https://ffxiv-greed-party.herokuapp.com/api/duties/';

  constructor(private http: Http) { }

  getRaidList(): Promise<Array<Raid>> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response) {
    return response.json();
  }

  private handleError(err: any) {
    console.error('An error occurred', err);
    return Promise.reject(err.message || err);
  }
}
