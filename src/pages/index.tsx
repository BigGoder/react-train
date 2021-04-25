import React, { useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';

const mapStateToProps = ({ user }) => {
  return { ...user };
};

function IndexPage(props) {
  console.log('props', props);
  const { dispatch } = props;
  const changeTile = () => {
    dispatch({
      type: 'user/changeTitle',
      payload: '周泽浩的react',
    });
  };

  const handleSubmit = (params: any) => {
    dispatch({
      type: 'user/login',
      payload: params,
    });
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>{props.title}</h2>
      <h3 onClick={changeTile}> 点击一下换标题 </h3>
      <h3 onClick={handleSubmit.bind(this, { name: 'zzh', password: 'zzh' })}>
        {' '}
        请求接口{' '}
      </h3>
    </div>
  );
}

export default connect(mapStateToProps)(IndexPage);
