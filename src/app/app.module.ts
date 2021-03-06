import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';

import { LibraryComponent } from './library/library.component';
import { PricingComponent } from './pricing/pricing.component';

import { BloglibraryComponent } from './bloglibrary/bloglibrary.component';
import { BlogComponent } from './bloglibrary/blog/blog.component';


const appRoutes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'workout', component: WorkoutComponent},
  { path:'contact', component: ReactiveformComponent} ,
  {path: 'library', component: LibraryComponent},
  {path: 'pricing', component: PricingComponent},
  { path: 'blogs', 
    component: BloglibraryComponent,  
    children: [
    {path:'blog', component: BlogComponent, outlet: 'form'}]
} 
]
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveformComponent,
    WorkoutComponent,
    LibraryComponent,
    PricingComponent
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
