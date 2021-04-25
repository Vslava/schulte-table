import React, { Component } from 'react';

import ShulteTable from '../../lib/shulte-table';

import { INITIAL_DIMENSION } from '../../lib/constants';

import style from './style.scss';

interface IAppState {
  shulteTable: ShulteTable,
}

class App extends Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);

    const shulteTable = new ShulteTable(INITIAL_DIMENSION);
    shulteTable.generate();

    this.state = {
      shulteTable,
    };
  }

  render(): JSX.Element {
    const { shulteTable } = this.state;

    return (
      <div id="layout" className={style.layout}>
      </div>
    );
  }
}

export default App;
