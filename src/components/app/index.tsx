import React, { Component } from 'react';

import { TableBoard } from '../table-board';

import { INITIAL_DIMENSION } from '../../lib/constants';

import style from './style.scss';

export class App extends Component<unknown, unknown> {
  render(): JSX.Element {
    return (
      <div id="layout" className={style.layout}>
        <TableBoard dimension={INITIAL_DIMENSION} />
      </div>
    );
  }
}
