import React, { PureComponent } from 'react';
import { get } from 'utils/request';
import { Layout, Icon } from 'antd';
import styles from './Header.css';

const { Header } = Layout;

export default class extends PureComponent {

  componentDidMount() {
    get('/api').then(res => console.log(res));
  }

  render() {

    return (
      <Header
        style={{
          width: '100%',
          backgroundColor: '#fff',
          height: '48px',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,.15)',
          padding: '0'
        }}
      >
        <div className={styles.header}>
          <div className={styles.org}>
            <span className={styles.orgIcon}>
              <Icon type="bars" />
            </span>
            <h2>
              油车青年
            </h2>
          </div>
          
        </div>
      </Header>
    );
  }
}