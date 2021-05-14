import React from 'react';
import styles from './[id].less';
import { query } from '@/services/product';
import { Card, Carousel } from 'antd-mobile';
import Tags from '@/components/Tags';
import { connect } from 'dva';
import ToolBar from '../../components/NavBar';
import Cart2Buy from './cart2buy';
import { useState, useCallback, useEffect } from 'react';

function Page(props) {
  interface ProductType {
    id: String;
    imgs: [];
    price: number;
    title: '';
    tags: [];
  }
  let obj: ProductType = {
    id: '',
    imgs: [],
    price: 0,
    title: '',
    tags: [],
  };

  const [item, setItem] = useState(obj);
  const { id } = props.match.params;
  const { dispatch } = props;

  useEffect(() => {
    queryId(id);
  }, []);

  const queryId = async (id) => {
    const response = await query({ id });
    if (response.status == 'ok') {
      setItem(response.data);
    }
  };

  const add2cart = () => {
    dispatch({
      type: 'cart/addCart',
      payload: item,
    });
  };

  const goPay = () => {
    console.log('goPay');
  };

  return (
    <div>
      <ToolBar title="商品详情"></ToolBar>
      {item.id}
      <Card full>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={}
          // afterChange={}
          className={styles.main}
        >
          {item.imgs.map((ele) => {
            return (
              <a className={styles.out}>
                <img
                  className="show"
                  src={ele}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </a>
            );
          })}
        </Carousel>
      </Card>
      <p className={styles.labelPrice}>Y{item.price}</p>
      <p className={styles.labelTitle}>{item.title}</p>
      <Tags tags={item.tags}></Tags>
      <Cart2Buy id={id} add2cart={add2cart} goPay={goPay}></Cart2Buy>
    </div>
  );
}

export default connect()(Page);
