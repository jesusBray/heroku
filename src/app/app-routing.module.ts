import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { DefaultComponent } from "./default/default.component";

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:LayoutComponent
  },
  {
    path:'**', component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
