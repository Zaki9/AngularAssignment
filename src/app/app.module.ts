import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComp} from './app.component.mycomp';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import {AppRoutingModule} from './app-routing.modules' ;
 import {MyComp2} from './app.component.mycomp2' ;
import {routingComponents} from './app-routing.modules' ;


@NgModule({
  imports:      [ BrowserModule  ,  FormsModule ],
  declarations: [ AppComponent , MyComp , MyComp2 ],
  bootstrap:    [ AppComponent ] ,
  })
export class AppModule { }
