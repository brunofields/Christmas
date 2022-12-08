import { PuzzleService } from './shared/services/puzzle.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  woah = new Audio('/Christmas/assets/woah.mp3');
  clock = new Audio('/Christmas/assets/clock.mp3');

  customReturnMessage = ['relogio', 'relógio', 'clock', 'watch']

  constructor(private puzzleService: PuzzleService, private router: Router) {

  }


  challengeForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });

  hasSolvedPuzzle = this.puzzleService.hasSolvedPuzzle;


  title = 'merry-christmas';

  challengeResult!: string;

  private subscription = new Subscription();
  
  public dateNow = new Date();
  public dDay = new Date('Dec 31 2022 23:59:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits(timeDifference: any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

get isFormValid(): boolean {
  return this.challengeForm.valid;
}

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

 submit() {
   const pwd = this.challengeForm.get('password')?.value;


  if (this.customReturnMessage.includes(pwd)) {
    this.clock.play();
    this.challengeResult = "algo aconteceu, a informação que você precisa já está nas charadas"
    return;
  }

   if (this.puzzleService.solution.includes(pwd)) {
     this.hasSolvedPuzzle = true;
     this.puzzleService.setSolvedPuzzle(true);
     this.router.navigate(['/prize']);
    } else {
      this.woah.play();
      this.challengeResult = "Ops, acho que não é bem isso... Tente novamente, talvez mais tarde?"
  }
 }

}