import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseEditorComponent } from './components/house-editor/house-editor.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseEditorComponent,
    HouseListComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


