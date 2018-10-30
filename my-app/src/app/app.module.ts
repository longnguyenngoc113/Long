import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes:Routes = [
  {path:'', loadChildren: ()=> HomeModule}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
