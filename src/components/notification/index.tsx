import React, { Component } from 'react';
import classnames from 'classnames';

import style from './style.scss';

interface INotificationProps {
  message: string | null;
  className?: string;
}

export class Notification extends Component<INotificationProps, unknown> {
  render(): JSX.Element {
    const classNames = classnames(
      this.props.className,
      style.message,
    );

    return (
      <div className={classNames}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}
