export class CurrentNumberTracker {
  private _currentNumber: number = 0;

  get currentNumber() {
    return this._currentNumber;
  }

  increaseCurrentNumber() {
    this._currentNumber++;
  }

  get nextNumber(): number {
    return this.currentNumber + 1;
  }
}
