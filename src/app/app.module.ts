import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseEditorComponent } from './components/house-editor/house-editor.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseEditorComponent,
    HouseListComponent,
    BannerComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


