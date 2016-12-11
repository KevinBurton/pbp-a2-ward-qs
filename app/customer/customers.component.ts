import { Component, Input, OnInit } from '@angular/core';

import { CustomerService } from './customer.service';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  customers: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

}
