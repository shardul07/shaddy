import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetilsComponent } from './product-detils/product-detils.component';
import { AboutComponent } from './about/about.component';
import { AboutchildComponent } from './aboutchild/aboutchild.component';
import { ContactComponent } from './contact/contact.component';
import { LabComponent } from './lab/lab.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewproductComponent,
    CreateproductComponent,
    ProductDetilsComponent,
    AboutComponent,
    AboutchildComponent,
    ContactComponent,
    LabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataserviceService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
