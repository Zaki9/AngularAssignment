import { Component } from '@angular/core';
  @Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>  
  <nav>
  <button routerLink="/comp1"    class="btn btn-primary" routerLinkActive="active" >Fill Form</button>  
  
  <button routerLink="/comp2"   class="btn btn-primary " routerLinkActive="active" > View List </button>  

 </nav>
    `, 
 styles:[
   ` .btn {
        
       margin-left:200px;
       margin-top:10px;
       

   }
   `
 ]
})
export class AppComponent  {  }
