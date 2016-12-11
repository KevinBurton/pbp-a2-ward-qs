import { Component } from '@angular/core';

import { CustomerService } from './customer/customer.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent {
  // [] means property binding component to DOM
  // () means event binding DOM to component
  title = 'Customer App';
  name='Ward';
  wardsColor='green';
  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
