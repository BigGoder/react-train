import React from 'react';
import styles from './index.less';
import ToolBar from '../../components/NavBar';
import LoginForm from './loginForm';
import { connect } from 'dva';
import { history } from 'umi';

function Page(props) {
  console.log(props);

  const { dispatch, isLogin } = props;
  if (isLogin) {
    history.push('/user');
  }
  const handleSubmit = (value) => {
    dispatch({
      type: 'user/login',
      payload: value,
    });
  };

  return (
    <div className={styles.main}>
      <ToolBar title={'登录'}></ToolBar>
      <LoginForm handleSubmit={handleSubmit}></LoginForm>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return { ...user };
};
export default connect(mapStateToProps)(Page);
