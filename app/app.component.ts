import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [] means property binding component to DOM
  // () means event binding DOM to component
  title = 'Customer App';
  name='Ward';
  wardsColor='green';
  customers = [
    { id: 1, name: 'Ward' },
    { id: 2, name: 'Kevin' },
    { id: 3, name: 'Eric' },
    { id: 4, name: 'Sally' },
    { id: 5, name: 'Emmet' },
  ];
  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }
}
