export class CurrentNumberTracker {
  private _currentNumber: number = 1;
  private _lastNumber: number;

  constructor(dimension: number) {
    this._lastNumber = dimension ** 2;
  }

  get currentNumber() {
    return this._currentNumber;
  }

  goToNextNumber() {
    this._currentNumber++;
  }

  get isCurrentNumberLast(): boolean {
    return this._currentNumber >= this._lastNumber;
  }
}
