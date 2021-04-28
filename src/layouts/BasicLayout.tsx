import React, { Component } from 'react';
import { connect } from 'dva';
import { Redirect } from 'umi';
import styles from './BasicLayout.less';
import BottomBar from '../components/BottomBar';

const mapStateProps = ({ user }) => {
  return { ...user };
};

const hideCompenents = ['/search'];

function BasicLayout(props) {
  const { children, location, dispatch, isLogin } = props;
  const showBottomNav = hideCompenents.indexOf(location.pathname) == -1;
  //const showBottomNav = true;

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        {showBottomNav && <BottomBar pathname={location.pathname} />}
      </footer>
    </div>
  );
}

export default connect(mapStateProps)(BasicLayout);
