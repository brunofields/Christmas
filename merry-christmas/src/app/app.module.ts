import { PuzzleService } from './shared/services/puzzle.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrizeComponent } from './prize/prize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PuzzleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
