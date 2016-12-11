import { Component, Input, OnInit } from '@angular/core';

import { CustomerService } from './customer.service';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomers()
      .subscribe(
        // it worked
        (customers) => this.customers = customers,
        // error
        (err) => { console.log(err); }
      );
    // Straight up promise to array
    // this._customerService.getCustomers()
    //   .then((customers) => this.customers = customers)
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Promise<any[]>
    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Rx observable version
    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //     return Observable.of(true);
    //     // now we eat it, but only if the
    //     // message has been communicated to the user
    //   });
  }

}
