import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AkinatorService } from "./akinator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private _akinator:AkinatorService){
    
  }
  // title = 'akinator';
  // gameHasStarted
  gameHasStarted = false;

 
  ngOnInit() {
    this._akinator.gameHasStarted$.subscribe(
      value => {
        this.gameHasStarted = value
        ;
      });

    this._akinator.startClass();
    this._akinator.startTree();

  }
}
