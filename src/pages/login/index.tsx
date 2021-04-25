import React from 'react';
import styles from './index.less';
import ToolBar from '../../components/NavBar';

export default function Page() {
  return (
    <div>
      <ToolBar title={'登录'}></ToolBar>
      <h1 className={styles.title}>Page login/index</h1>
    </div>
  );
}
