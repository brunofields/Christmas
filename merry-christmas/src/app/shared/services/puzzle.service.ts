import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  private _hasSolvedPuzzle = false;
  private _solution = ['9873303122'];

  public get hasSolvedPuzzle(): boolean {
    return this._hasSolvedPuzzle;
  }
  public setSolvedPuzzle(value: boolean) {
    this._hasSolvedPuzzle = value;
  }


  public get solution(): string[] {
    return this._solution;
  }

  constructor() { }
}
