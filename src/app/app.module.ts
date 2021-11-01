import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent },
  {path:'contact', component: ReactiveformComponent},
  {path:'workout', component: WorkoutComponent}
  
]


@NgModule({
    imports:      [ 
                  BrowserModule, 
                  ReactiveFormsModule, 
                  FormsModule ,
                  RouterModule.forRoot(appRoutes)],

    declarations: [ 
                  AppComponent, 
                  HelloComponent, 
                  NavbarComponent,
                  HomeComponent,
                  ReactiveformComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
