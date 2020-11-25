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

  // actualQuestion = this._akinator.actualQuestion;

  // rpta = this._akinator.rpta;
  // newAnimalQuestion = "Who was your animal?";
  // newAnimal = ""
  // newAnimalCompleted = false;
  // lastAnwer = true;

  // questionToDiference = "";
  // newQuestion = "";

  // rptaFINAL = ""
  // sendMessage(msg: string){
  //   this._socket.emit("message", msg);
  // } 
  // nextQuestion(answer: string){
  //   this._socket.emit("answer", answer);
  // }

  // lastAnwerF(lastAnwer){
  //   if(!lastAnwer){
  //     this.lastAnwer = false
  //   }else{
  //     this.rptaFINAL = "Iam a genius"
  //   }
  // }

 

  // newAnimalCreated(){
  //   this.newAnimalCompleted =  true;
  //   this.questionToDiference = `Whats the diference between your ${this.newAnimal} and ${this.rpta}`
  // }

  // newQuestionCreated(){

  //   let lastinfo = {newQuestion:this.newQuestion,
  //     newAnimal: this.newAnimal}
  //     console.log(lastinfo);
      
  //   this._socket.emit("last-info",lastinfo);
  //     this.rptaFINAL = "we have improve with your feedback"
  // }

  ngOnInit() {
    this._akinator.gameHasStarted$.subscribe(
      value => {
        this.gameHasStarted = value
        ;
      });
  }
}
