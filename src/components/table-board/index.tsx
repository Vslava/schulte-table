import React, { Component } from 'react';

import { ShulteTable } from '../../lib/shulte-table';

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

  render(): JSX.Element {
    const boardHTML = this.shulteTable.rows.map((row) => {
      const rowHTML = row.cells.map((cell) => (
        <div className={style.cell}>{cell.value}</div>
      ));

      return <div className={style.row}>{rowHTML}</div>;
    });

    return <div className={style.board}>{boardHTML}</div>
  }
}

export default TableBoard;
