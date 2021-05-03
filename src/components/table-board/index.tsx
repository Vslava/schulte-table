import React, { Component } from 'react';

import { ShulteTable } from '../../lib/shulte-table';
import { CurrentNumberTracker } from '../../lib/current-number-track';

import { TableCell } from '../table-cell';

import style from './style.scss';

interface ITableBoardProps {
  dimension: number;
}

export class TableBoard extends Component<ITableBoardProps, unknown> {
  private shulteTable: ShulteTable;
  private currentNumberTracker;

  constructor(props: ITableBoardProps) {
    super(props);

    this.currentNumberTracker = new CurrentNumberTracker();
    this.shulteTable = ShulteTable.generate(
      props.dimension,
    );
  }

  handleCellClick = (clickedNumber: number): boolean => {
    const isCellForCurrentNumber = (
      clickedNumber === this.currentNumberTracker.nextNumber
    );

    if (isCellForCurrentNumber) {
      this.currentNumberTracker.increaseCurrentNumber();
    }

    return isCellForCurrentNumber;
  };

  makeBoardHTML = () => (
    this.shulteTable.rows.map((row) => {
      const rowHTML = row.cells.map((cell) => (
        <TableCell
          className={style.cell}
          value={cell.value}
          onClick={this.handleCellClick}
        />
      ));

      return <div className={style.row}>{rowHTML}</div>;
    })
  );

  render(): JSX.Element {
    const boardHTML = this.makeBoardHTML();

    return <div className={style.board}>{boardHTML}</div>
  }
}
