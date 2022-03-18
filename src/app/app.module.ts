import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { BackendApiService } from './services/backend-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
