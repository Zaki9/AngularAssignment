import {Component} from '@angular/core' ;
import {MyComp2} from './app.component.mycomp2';
 
 @Component({
    selector : 'my-comp' ,
    templateUrl: './my-form.component.html' ,
    styles:[`input.ng-valid   {
        border-left: 5px solid #42A948; /* green */
      }
      
      input.ng-invalid   {
        border-left: 5px solid #a94442; /* red */
      }
      .box{

      }`
    ],
 })


export class MyComp {
  public static c=0;
  public name="" ;
  cm : string = "";
   
   
      submitForm(value : any ){
        MyComp.c = MyComp.c + 1;
        console.log( value);   
        this.name =value.name + " "+value.phone  + " " + value.occupation;
        this.cm = (MyComp.c).toString();
          localStorage.setItem(this.cm , JSON.stringify(value));
        

          alert("User Registered , Click ViewList to See List");
           

           


       }

   
}