class ShulteTable {
  dimension: number;
  numbersAmount: number;
  shulteTable: number[][] = [];

  constructor(dimension: number) {
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

  generate(): void {
    const numbers = this.makeNumbersArray();
    const randomOrderNumbers = this.tossNumbersInRandomOrder(numbers);

    this.shulteTable = [];

    for (let i = 0; i < this.dimension; i++) {
      this.shulteTable.push(randomOrderNumbers.slice(0, this.dimension));
      randomOrderNumbers.splice(0, this.dimension);
    }
  }
}

export default ShulteTable;
