import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { HighlightDirective } from './highlight.directive';
import { LabComponent } from './lab/lab.component';
import { Lab2Component } from './lab2/lab2.component';
import { AboutComponent } from './about/about.component';
import { SqrtpipePipe } from './sqrtpipe.pipe';
import { NamePipe } from './name.pipe';
import { ViewComponent } from './view/view.component';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    HighlightDirective,
    LabComponent,
    Lab2Component,
    AboutComponent,
    SqrtpipePipe,
    NamePipe,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
