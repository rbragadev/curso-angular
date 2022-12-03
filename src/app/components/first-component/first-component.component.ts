import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Raphael';
  age: number = 33;
  job: string = 'programador';
  hobbies = ['videogame', 'musica'];
  car = {
    name: 'Honda',
    marca: 'city',
  };
}
