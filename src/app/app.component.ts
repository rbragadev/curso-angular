import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Raphael';
  userData = {
    email: 'raffael.info@gmail.com',
    role: 'admin',
  };

  title = 'curso-angular';
}
