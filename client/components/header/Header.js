import React, { PureComponent } from 'react';
import className from 'classnames';
import fly from 'utils/request';
import { Layout, Icon, Input, Avatar, Modal } from 'antd';
import styles from './Header.css';

const { Header } = Layout;
const { Search } = Input;

export default class extends PureComponent {

  state = {
    isShow: false
  }

  componentDidMount() {
    fly.get('/api').then(res => console.log(res));
  }

  handleClick = () => {
    // message.info('哈哈哈哈哈');
    this.setState({
      isShow: true
    });
  }

  close = () => {
    this.setState({
      isShow: false
    });
  }

  render() {
    const { isShow } = this.state;

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
          {
            isShow
              ? (
                <Modal
                  title={'hhh'}
                  visible={isShow}
                  onOk={this.close}
                  onCancel={this.close}
                >
                  heeh
                </Modal>
              )
              : null
          }
          {this.renderOrg()}
          {this.renderSearch()}
          {this.renderMe()}
        </div>
      </Header>
    );
  }

  renderOrg() {

    return (
      <section className={styles.org}>
        <span className={styles.orgIcon}>
          <Icon type="bars" className="click-btn" />
        </span>
        <h2 onClick={this.handleClick}>
          油车青年
        </h2>
      </section>
    );
  }

  renderSearch() {

    return (
      <section className={styles.search}>
        <Search
          placeholder="在个人项目中搜索"
          onSearch={value => console.log(value)}
          style={{ width: 240 }}
        />
        <Icon
          onClick={this.handleClick}
          type="plus-circle"
          className={className(styles.addTask, 'click-btn')}
        />
      </section>
    );
  }

  renderMe() {

    return (
      <section className={styles.me}>
        <Avatar
          icon="user"
          size="small"
          className="can-click"
        />
      </section>
    );
  }
}