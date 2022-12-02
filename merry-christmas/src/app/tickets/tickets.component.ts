import { Router } from '@angular/router';
import { PuzzleService } from './../shared/services/puzzle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private puzzleService: PuzzleService, private router: Router) { }

  ngOnInit(): void {
    if (!this.puzzleService.hasSolvedPuzzle) {
      this.router.navigate(['/']);
    }
  }

}
