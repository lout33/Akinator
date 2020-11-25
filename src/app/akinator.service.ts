import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AkinatorService {


  private gameHasStarted = new Subject<boolean>();
  gameHasStarted$ = this.gameHasStarted.asObservable();
  url = "http://18.222.226.65:3000/play/"
  pattern = []
  
  announceMission(mission: boolean) {
    this.gameHasStarted.next(mission);
  }

  // confirmMission(astronaut: string) {
  //   this.missionConfirmedSource.next(astronaut);
  // }
  constructor(private http:HttpClient) { }

  getQuestion(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    console.log(this.pattern);
    
    return this.http.post(this.url,{pattern:this.pattern},httpOptions);
  }
}
