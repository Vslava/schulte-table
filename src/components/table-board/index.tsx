import React, { Component } from 'react';

import { ShulteTable } from '../../lib/shulte-table';
import TableCell from '../table-cell';

import style from './style.scss';

interface ITableBoardProps {
  dimension: number;
}

class TableBoard extends Component<ITableBoardProps, unknown> {
  private shulteTable: ShulteTable;

  constructor(props: ITableBoardProps) {
    super(props);

    this.shulteTable = ShulteTable.generate(
      props.dimension,
    );
  }

  makeBoardHTML = () => (
    this.shulteTable.rows.map((row) => {
      const rowHTML = row.cells.map((cell) => (
        <TableCell className={style.cell} value={cell.value}/>
      ));

      return <div className={style.row}>{rowHTML}</div>;
    })
  );

  render(): JSX.Element {
    const boardHTML = this.makeBoardHTML();

    return <div className={style.board}>{boardHTML}</div>
  }
}

export default TableBoard;
