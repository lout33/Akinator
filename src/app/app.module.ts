import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StartComponent } from './pages/start/start.component';
import { GameComponent } from './pages/game/game.component';
 
import { AkinatorService } from './akinator.service';
 
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [AkinatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
