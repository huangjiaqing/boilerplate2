import React, { PureComponent } from 'react';
import Header from 'components/header';
import styles from './Org.css';

export default class Org extends PureComponent {

  

  render() {

    return (
      <div className={styles.org}>
        <Header />
        {this.renderMain()}
      </div>
    );
  }

  renderMain() {

    return (
      <div className={styles.main}>
        组织页主体
      </div>
    );
  }
}