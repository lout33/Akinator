import { Component, OnInit } from '@angular/core';
import { AkinatorService } from "src/app/akinator.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pattern = this._akinator.pattern

  mobile;
  title = 'akinator';

  gameHasStarted = false;
  actualQuestion = "";
  rpta = {animalName: "",animalPhoto:""};
  newAnimalQuestion = "Who was your animal?";
  newAnimal = ""
  newAnimalCompleted = false;
  wrongGuess = false;
  questionToDiference = "";
  newQuestion = "";
  winSentence = "";
  thanksNewAnimal = "Thank You, our team will review your question !!!";
  thanksNewAnimalBool = false;
  counter = 1
  constructor( private _akinator:AkinatorService) {

   }

  ngOnInit(): void {
    if (window.screen.width <= 600) { // 768px portrait
      this.mobile = true;
    }


    this._akinator.gameHasStarted$.subscribe(
      value => {
        this.gameHasStarted = value
        ;
      });
      console.log("hasStarted()");
      this.hasStarted()

    
  }



  playAgain(){
  this.gameHasStarted = true;
  this.actualQuestion = "";
  this.rpta = {animalName: "",animalPhoto:""};
  this.newAnimalQuestion = "Who was your animal?";
  this.newAnimal = ""
  this.newAnimalCompleted = false;
  this.wrongGuess = false;
  this.questionToDiference = "";
  this.newQuestion = "";
  this.winSentence = "";
  this.thanksNewAnimalBool = false;
  this._akinator.pattern = [];
  this.counter = 1 ;
  this.hasStarted()
}
 
  sendMessage(msg: string){
  } 
  nextQuestion(answer: number){
    console.log("one time");
    this._akinator.pattern.push(answer);    
    let data = this._akinator.getQuestion()
    if (data.animal) {
      this.rpta.animalName = data.question
    }
      this.actualQuestion = data.question
    this.counter++;
  }

  lastAnwerF(lastAnwer:boolean){
    if(!lastAnwer){
      this.wrongGuess = true;
    }else{
      this.winSentence = "Great, guessed right one more time !"
    }
  }

 

  newAnimalCreated(){
    this.newAnimalCompleted =  true;
    this.questionToDiference = `Please give me a yes/no question that
    distinguishes between ${this.newAnimal} and ${this.rpta.animalName}`
  }

  newQuestionCreated(){

    let lastinfo = {newQuestion:this.newQuestion,
      newAnimal: this.newAnimal};
      this.thanksNewAnimalBool = true
      console.log(lastinfo);
      this.winSentence = "we have improve with your feedback"
  }

  // 

  hasStarted(){
    let data = this._akinator.getQuestion()
    this.actualQuestion= data.question
  }
}
