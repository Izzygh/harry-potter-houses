import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './pages/houses/houses.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'houses', component: HousesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
