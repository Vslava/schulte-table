import React, { Component } from 'react';

import style from './style.scss';

interface ITableCellProps {
  value: number;
  className?: string;
}
class TableCell extends Component<ITableCellProps, unknown> {
  get className() {
    return this.props.className || '';
  }

  render(): JSX.Element {
    return <div className={`${this.className} ${style.cell}`}>{this.props.value}</div>
  }
}

export default TableCell;
