import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HelpComponent } from './help/help.component';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { AboutComponent } from './about/about.component';
import { AboutchildComponent } from './aboutchild/aboutchild.component';
import { ContactComponent } from './contact/contact.component';
import { LabComponent } from './lab/lab.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { Lab2Component } from './lab2/lab2.component';
import { SortPipe } from './sort.pipe';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { AddempComponent } from './addemp/addemp.component';
import { Lab3aComponent } from './lab3a/lab3a.component';
import { MovieComponent } from './movie/movie.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomserviceService } from './roomservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewproductComponent,
    CreateproductComponent,
    AboutComponent,
    AboutchildComponent,
    ContactComponent,
    LabComponent,
    SearchfilterPipe,
    Lab2Component,
    SortPipe,
    HeroFormComponent,
    AddempComponent,
    Lab3aComponent,
    MovieComponent,
    RoomDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  

  ],
  providers: [DataserviceService,RoomserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
