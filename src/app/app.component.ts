import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>
  Hello {{name}}
  </h1>
  <p>Email: {{email}}</p>
  <p>{{address.street}} {{address.city}} {{address.state}}</p>
  `,
})
export class AppComponent  {
  name = 'Eddie';
  email = 'elburgess1@gmail.com'
  address = {
    street: '25th Avenue South',
    city: 'Seattle',
    state: 'WA'
  }
}
