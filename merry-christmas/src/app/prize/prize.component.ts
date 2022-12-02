import { Router } from '@angular/router';
import { PuzzleService } from './../shared/services/puzzle.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss']
})
export class PrizeComponent implements OnInit {

  showPrize = false;
  startSong = false;
  showTickets = false;

  constructor(private puzzleService: PuzzleService, private router: Router) { }

  ngOnInit(): void {
    if (!this.puzzleService.hasSolvedPuzzle) {
      this.router.navigate(['/']);
    }
  }

  emitShowPrize() {
    this.showPrize = true;
    timer(26000).subscribe(() => {
      this.startSong = true;

      timer(1400).subscribe(() => {
        this.showTickets = true;
      })
    })
  }

}
