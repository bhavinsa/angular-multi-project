import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1SharedModule }
  from '../../projects/app1/src/app/app.module';

import { App2SharedModule }
  from "../../projects/app2/src/app/app.module";
const routes: Routes = [
  {path: 'app1',
   loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'},
  {path: 'app2',
   loadChildren: '../../projects/app2/src/app/app.module#App2SharedModule'},
  { path: '**', redirectTo: '/app1/one'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes), App1SharedModule.forRoot(),
    App2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
