import React, { PureComponent } from 'react';
import styles from './Header.css';

export default class Header extends PureComponent {

  render() {

    return (
      <div className={styles.header}>
        头部
      </div>
    );
  }
}