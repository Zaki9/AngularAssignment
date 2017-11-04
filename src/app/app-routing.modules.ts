import { NgModule }      from '@angular/core';
import {RouterModule , Routes} from '@angular/router' ;
import {MyComp2} from './app.component.mycomp2' ;

const routes : Routes = [{path : 'my-comp2' , component: MyComp2  }];
@NgModule({
    imports:[RouterModule.forRoot(routes)] ,
    exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyComp2]