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
  public name="" ;
  cm : string = "";
  childmessage : string = "";
  
  public parentModal="zaki" ;
      submitForm(value : any ){
        console.log( value);   
        this.name =value.name + " "+value.phone  + " " + value.occupation;
       }

    clicked(){
        console.log("clicked");            
        this.childmessage =this.name ;
        console.log(this.cm);
        
    }
}