import React, { Component } from 'react';

import style from './style.scss';

interface INotificationProps {
  message: string | null;
}

export class Notification extends Component<INotificationProps, unknown> {
  render(): JSX.Element {
    return (
      <div className={`${style.message} ${style.red}`}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}
