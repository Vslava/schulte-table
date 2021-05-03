import React, { Component } from 'react';
import classnames from 'classnames';

import style from './style.scss';

interface ITableCellProps {
  value: number;
  className?: string;
  onClick?: (clickedNumber: number) => boolean;
}

interface ITableCellState {
  checked: boolean;
}

export class TableCell extends Component<ITableCellProps, ITableCellState> {
  constructor(props: ITableCellProps) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  private get className() {
    return this.props.className || '';
  }

  private handleClick = () => {
    if (this.props.onClick && this.props.onClick(this.props.value)) {
      this.setState({
        checked: true,
      });
    }
  }

  render(): JSX.Element {
    const classNames = classnames(
      this.className,
      style.cell,
      { [style.cell_checked]: this.state.checked },
    );

    return (
      <div className={classNames} onClick={this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}
