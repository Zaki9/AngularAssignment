import { Component,Input,OnInit} from '@angular/core' ;
import {MyComp} from './app.component.mycomp' ;

@Component({
    selector:'my-comp2',
    template: `    
    <ng-template #loading><h1 class="text-center">Please Register First </h1></ng-template>
    <div *ngIf="flag;else loading;">

    <div class="box"><h1>List</h1></div>
    
    <table   class="table">

   <tr><th>Name </th> <th>Phone </th> <th>Occupation </th> </tr>
     
   <ng-container *ngFor="let u of userlist">
   
    
    
     <tr> <td>{{ u.name }} </td> <td> {{u.phone}} </td> <td>{{u.occupation}}<td> 
     
     </tr>

     </ng-container>
  </table>
    </div>                 
               `,
               styles:[
                   `
                   .table{
                       margin-top:50px;
                       margin-left:150px;
                   }
                   .box{
                    margin-left:606px;
                    
                   }
                   `
               ]
}) 

export class MyComp2{

     userlist = [];
     flag: boolean = false;
     constructor(){
 console.log("ijoj");
 
 for(var i=1 ; i<=localStorage.length ;i++)
 {  console.log(i);
    this.flag=true;
    
    
     this.userlist.push(JSON.parse(localStorage.getItem(i.toString()))); 
}
 

    }   
    
}