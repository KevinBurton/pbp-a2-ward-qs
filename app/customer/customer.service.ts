import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { Customer } from './';
const URL_CUSTOMERS = 'app/customers.json'
@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }
  getCustomers()  : Observable<Customer[]> {
    // return this._http.get(URL_CUSTOMERS)
    //   .map((response: Response) => response.json())
    //   .toPromise()
    //   .catch((err: any) => {
    //     console.log(err); // again, customize me please
    //     return Promise.reject(err);
    //   });
    // Alternate:
    return this._http.get(URL_CUSTOMERS)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }
  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message well for devs
    return Observable.throw(err); // our opportunity customize this error
  }
}
