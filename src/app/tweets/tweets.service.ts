import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import "rxjs/add/operator/map";

@Injectable()
export class Tweets {
  constructor(private _http: Http) { }

  getAll() {
    return this._http.get('http://localhost:3000/api/v1/tweets')
                     .map(res => JSON.parse(res.text()))
  }
}
