import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddempComponent } from './addemp/addemp.component';
import { ContactComponent } from './contact/contact.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { LabComponent } from './lab/lab.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3aComponent } from './lab3a/lab3a.component';
import { MovieComponent } from './movie/movie.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'view' , component:ViewproductComponent},
  {path:'create' , component:CreateproductComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'lab', component:LabComponent},
  {path:'lab2',component:Lab2Component},
  {path:'template',component:HeroFormComponent},
  {path:'emp',component:AddempComponent},
  {path:'lab3', component:Lab3aComponent},
  {path:'movie',component:MovieComponent},
  {path:'room',component:RoomDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
