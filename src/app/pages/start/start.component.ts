import { Component, OnInit } from '@angular/core';
import { AkinatorService } from "src/app/akinator.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor( private _akinator:AkinatorService){
  }
  ngOnInit(): void {
    this._akinator.announceMission(false);

  }

  startGame(){

    this._akinator.announceMission(true);
    // this._akinator.gameHasStarted = true

    
  }

}
