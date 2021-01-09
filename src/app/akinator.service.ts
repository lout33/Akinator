import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Node,BST} from './../assets/class.js';
import {default as bitree } from './../assets/tree03.json';

@Injectable({
  providedIn: 'root'
})
export class AkinatorService {

  bst
  private gameHasStarted = new Subject<boolean>();
  gameHasStarted$ = this.gameHasStarted.asObservable();
  pattern = []
  
  announceMission(mission: boolean) {
    this.gameHasStarted.next(mission);
  }

  // confirmMission(astronaut: string) {
  //   this.missionConfirmedSource.next(astronaut);
  // }
  constructor(private http:HttpClient) { }

  getQuestion(){

    console.log(this.pattern);
    let findedNode =  this.bst.find(this.pattern)
    if(findedNode.animal){

      return {question:findedNode.question,animal:findedNode.animal}
    }
    console.log(findedNode.question);
    return {question:findedNode.question}

  }

  startClass(){
    this.bst =  new BST()
    // @ts-ignore: Unreachable code error
    this.bst.root = bitree.root
    console.log(this.bst);
  }
  
  startTree(){
    console.log(bitree);
  }
}
