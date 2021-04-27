import React, { useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Redirect, history, Link } from 'umi';
import { Card, Flex, WingBlank, WhiteSpace } from 'antd-mobile';

const mapStateToProps = ({ user }) => {
  return { ...user };
};

function IndexPage(props) {
  const { dispatch, isLogin } = props;
  const changeTile = () => {
    dispatch({
      type: 'user/changeTitle',
      payload: 'react',
    });
  };

  const handleSubmit = (params: any) => {
    dispatch({
      type: 'user/login',
      payload: params,
    });
  };

  if (!isLogin) {
    return (
      // <Redirect to={{ pathname: '/login'}}
      // />

      <Link to="/login" />
      //history.push('/list')
    );
  }

  useEffect(() => {});

  return (
    <WingBlank size="lg">
      <WhiteSpace size="xs" />
      <Card full>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
      </Card>
    </WingBlank>

    // <div>
    //   <h1 className={styles.title}>Page index</h1>
    //   <h2>{props.title}</h2>
    //   <h3 onClick={changeTile}> 点击一下换标题 </h3>
    //   <h3 onClick={handleSubmit.bind(this, { name: 'zzh', password: 'zzh' })}>
    //     {' '}
    //     请求接口{' '}
    //   </h3>
    // </div>
  );
}

export default connect(mapStateToProps)(IndexPage);
