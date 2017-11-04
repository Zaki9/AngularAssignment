import { Component } from '@angular/core';
  @Component({
  selector: 'my-app',
  template: `<h1>User - Form  {{name}}</h1>
  <my-comp></my-comp>`,
})
export class AppComponent  { name = 'Shreeja'; }
