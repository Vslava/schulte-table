class Cell {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

class Row {
  private _cells: Cell[];

  constructor(values: number[]) {
    this._cells = values.map((v) => new Cell(v));
  }

  get cells() {
    return this._cells;
  }
}

class ShulteTable {
  private dimension: number;
  private numbersAmount: number;
  private _rows: Row[] = [];

  private constructor(dimension: number) {
    this.dimension = dimension;
    this.numbersAmount = this.dimension ** 2;
  }

  private makeNumbersArray() {
    const numbers: number[] = new Array(this.numbersAmount);

    for (let i = 0; i < this.numbersAmount; i++) {
      numbers[i] = i + 1;
    }

    return numbers;
  }

  private tossNumbersInRandomOrder(numbers: number[]) {
    const randomOrderNumbers: number[] = [];

    for (let i = 0; i < this.numbersAmount; i++) {
      const idx = Math.floor(Math.random() * numbers.length);
      randomOrderNumbers.push(numbers[idx]);
      numbers.splice(idx, 1);
    }

    return randomOrderNumbers;
  }

  private generate(): void {
    const numbers = this.makeNumbersArray();
    const randomOrderNumbers = this.tossNumbersInRandomOrder(numbers);

    this._rows = [];

    for (let i = 0; i < this.dimension; i++) {
      const row = new Row(randomOrderNumbers.slice(0, this.dimension));
      randomOrderNumbers.splice(0, this.dimension);

      this._rows.push(row);
    }
  }

  get rows() {
    return this._rows as ReadonlyArray<Row>;
  }

  static generate(dimension: number) {
    const shulteTable = new ShulteTable(dimension);
    shulteTable.generate();
    return shulteTable;
  }
}

export {
  ShulteTable,
};
