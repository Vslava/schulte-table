import React, { Component } from 'react';
import classnames from 'classnames';

import { TableBoard } from '../table-board';
import { Notification } from '../notification';

import { INITIAL_DIMENSION } from '../../lib/constants';

import style from './style.scss';

interface IAppState {
  isFinished: boolean;
}

export class App extends Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      isFinished: false,
    }
  }

  private handleLastCellClick = () => {
    this.setState({
      isFinished: true,
    });
  }

  render(): JSX.Element {
    const notificationClasses = classnames(
      style.element,
      style.notification,
    );

    return (
      <div className={style.layout}>
        <div className={style.elements}>
          {this.state.isFinished && (
            <Notification
              className={notificationClasses}
              message='!!! DONE. THANK YOU !!!'
            />
          )}
          <TableBoard
            className={style.element}
            dimension={INITIAL_DIMENSION}
            onLastCellClick={this.handleLastCellClick}
          />
        </div>
      </div>
    );
  }
}
