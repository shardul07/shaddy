import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { LabComponent } from './lab/lab.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
 
const routes: Routes = [
  {path:'view' , component:ViewproductComponent},
  {path:'create' , component:CreateproductComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'lab', component:LabComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {
 
  
 
 }