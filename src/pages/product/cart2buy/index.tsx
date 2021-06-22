import React from 'react';
import styles from './index.less';
import classnames from 'classnames';
import { Link } from 'umi';
import { connect } from 'dva';
import { editCart } from '@/services/editCart';
import { useCallback } from 'react';

const mapStateToProps = ({ cart, props }) => {
  return { goods: [...cart.goods], ...props };
};

interface ProductId {
  id: string;
  goods?: [];
  add2cart: Function;
  goPay: Function;
}

const Index: React.FC<ProductId> = (props) => {
  const { goods, id, goPay, add2cart } = props;

  return (
    <div className={styles.main}>
      <Link to="/cart" className={classnames(styles.cart)}>
        <span className="iconfont icon-3 font16"></span>
        <p className={styles.title}>购物车: {goods.length}</p>
      </Link>
      <div
        className={classnames(styles.addCart, styles.btn)}
        onClick={() => {
          add2cart();
        }}
      >
        加入购物车
      </div>
      <div
        className={classnames(styles.buyNow, styles.btn)}
        onClick={() => {
          goPay();
        }}
      >
        立即购买
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Index);
