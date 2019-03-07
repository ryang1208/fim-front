import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const { currentUser, theme } = this.props;
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        {currentUser.name ? (
          <div>
            <span className={`${styles.action} ${styles.account}`}>
              <span className={styles.name}>{currentUser.name}</span>
            </span>
            <span className={`${styles.action} ${styles.account}`}>
              <span className={styles.name}>密码修改</span>
            </span>
            <span className={`${styles.action} ${styles.account}`}>
              <span className={styles.name}>退出</span>
            </span>
          </div>
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )}
      </div>
    );
  }
}
