import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComp} from './app.component.mycomp';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import {AppRoutingModule} from './app-routing.modules' ;
 import {MyComp2} from './app.component.mycomp2' ;
import {routingComponents} from './app-routing.modules' ;
import {RouterModule} from '@angular/router' ;

@NgModule({
  imports:      [ BrowserModule  ,  FormsModule , RouterModule.forRoot([
    {path:'comp2' , component: MyComp2  } , 
    {path:'comp1' , component:MyComp}
  
  ]) ],
    
  declarations: [ AppComponent , MyComp , MyComp2 ],
  bootstrap:    [ AppComponent ] ,
  })
export class AppModule { }
