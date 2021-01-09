import { Component, OnInit ,ElementRef } from '@angular/core';
import { AkinatorService } from "src/app/akinator.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  switcher = true
  constructor( private _akinator:AkinatorService,private _elementRef : ElementRef){
  }
  ngOnInit(): void {
    this._akinator.announceMission(false);

  }

  startGame(){
    this._akinator.announceMission(true);
    // this._akinator.gameHasStarted = true
  }

  playSong(){
    let domElement = this._elementRef.nativeElement.querySelector(`#myAudio`);
    if(this.switcher){
      domElement.play();
      this.switcher = false
    } else{
      domElement.pause(); 
      this.switcher = true
    }
  }



}
