import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './BasicLayout.less';
import BottomBar from '../components/BottomBar';

const mapStateProps = ({ user }) => {
  return { ...user };
};

function BasicLayout(props) {
  const { children, location, dispatch, user } = props;
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{BottomBar && <BottomBar pathname={location.pathname} />}</footer>
    </div>
  );
}

export default connect(mapStateProps)(BasicLayout);
