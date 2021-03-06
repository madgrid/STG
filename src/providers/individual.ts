import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IndividualProvider {
  url: string = 'https://www.caringcurrency.com/api';

  constructor(public http: Http) {
  }

  sendSignUp(user) {
    console.log('1',user)
    return this.post('individual', user);
  }


  post(endpoint: string, body: any) {
    console.log('2',endpoint)
    console.log('3',body)
    return this.http.post(this.url + '/' + endpoint, body);
  }


  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

}
