import React, { useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Redirect } from 'umi';
import Header from './Header/index';
import Items from './Items';

const mapStateToProps = ({ user }) => {
  return { ...user };
};

function IndexPage(props) {
  const { dispatch, isLogin, name, userid, icon } = props;
  const handleClick = (idx) => {
    alert(idx);
  };

  const handleSubmit = (params: any) => {
    dispatch({
      type: 'user/login',
      payload: params,
    });
  };

  if (!isLogin) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  const userItems = [
    {
      title: '我的订单',
      handleClick: handleClick,
    },
    {
      title: '我的钱包',
      handleClick: handleClick,
    },
    {
      title: '我的收藏',
      handleClick: handleClick,
    },
    {
      title: '我的喜爱',
      handleClick: handleClick,
    },
  ];

  useEffect(() => {});

  return (
    <div>
      <Header name={name} icon={icon} userid={userid}></Header>
      <Items list={userItems}></Items>
    </div>

    // <div>
    //   <h1 className={styles.title}>Page index</h1>
    //   <h2>{props.name}</h2>
    //   <h3> {props.userid} </h3>
    // </div>
  );
}

export default connect(mapStateToProps)(IndexPage);
