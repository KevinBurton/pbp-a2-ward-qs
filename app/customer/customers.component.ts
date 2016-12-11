import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = [
    { id: 1, name: 'Ward' },
    { id: 2, name: 'Kevin' },
    { id: 3, name: 'Eric' },
    { id: 4, name: 'Sally' },
    { id: 5, name: 'Emmet' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
