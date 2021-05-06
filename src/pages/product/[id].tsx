import React from 'react';
import styles from './[id].less';
import { query } from '@/services/product';
import { Card, Carousel } from 'antd-mobile';
import Tags from '@/components/Tags';
import ToolBar from '../../components/NavBar';
import { useState, useCallback, useEffect } from 'react';

export default function Page(props) {
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
  useEffect(() => {
    const { id } = props.match.params;
    queryId(id);
  }, []);

  const queryId = async (id) => {
    const response = await query({ id });
    if (response.status == 'ok') {
      setItem(response.data);
    }
  };

  return (
    <div>
      <ToolBar title="商品详情"></ToolBar>
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
    </div>
  );
}
