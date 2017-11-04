import { Component,Input,OnInit} from '@angular/core' ;

@Component({
    selector:'my-comp2',
    template: `    
    
    <ul>
    <li *ngFor="let u of userlist">
      {{ u }}
    </li>
  </ul>                 
               
               `
}) 

export class MyComp2 implements OnInit{

     userlist = [];
     _greetMessage : string; 
    constructor(){

    }   
    ngOnInit(){

    }

@Input()
    set greetMessage(message : string ){
        this._greetMessage = message; 
        this.userlist.push(message);
    }
    get greetmessage(){
        return this._greetMessage;
    }
}