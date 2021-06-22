import { connect } from 'umi';
import styles from './index.less';
import { useEffect, useState } from 'react';
import { List, Checkbox, Flex, Button } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

function Page(props) {
  const { goods, dispatch } = props;
  const [checkItem, setCheckItem] = useState([]);
  const [isAllCheck, setAllCheck] = useState(false);
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
    setCheckItem(
      Array.from({ length: goods.length }, (ele, index) => {
        return false;
      }),
    );
  }, []);

  useEffect(() => {
    calcuPrice();
  }, [goods]);

  useEffect(() => {
    calcuPrice();
    let allCheck = false;
    allCheck = checkItem.every((e) => {
      return e == true;
    });
    if (allCheck != isAllCheck) {
      setAllCheck(allCheck);
    }
  }, [checkItem]);

  const calcuPrice = () => {
    let price = 0;
    for (let i = 0; i < checkItem.length; i++) {
      if (checkItem[i]) {
        price += Number((goods[i].num * Number(goods[i].price)).toFixed(2));
        console.log('price', price);
      }
    }
    setAllPrice(price);
  };

  const add = (value) => {
    dispatch({
      type: 'cart/addCart',
      payload: value,
    });
  };

  const sub = (value) => {
    dispatch({
      type: 'cart/subCart',
      payload: value,
    });
  };

  const onChange = (value, index) => {
    let isCheck = checkItem[index];
    checkItem[index] = !isCheck;
    let newCheck = [...checkItem];
    setCheckItem(newCheck);
  };

  const allChange = () => {
    if (isAllCheck) {
      setCheckItem(
        Array.from({ length: goods.length }, (ele, index) => {
          return false;
        }),
      );
    } else {
      setCheckItem(
        Array.from({ length: goods.length }, (ele, index) => {
          return true;
        }),
      );
    }
    setAllCheck(!isAllCheck);
  };

  return (
    <div className={styles['container']}>
      {goods.map((ele, index) => {
        ele.add = add;
        ele.sub = sub;
        return (
          <div>
            <CheckboxItem
              key={ele.id}
              onChange={() => onChange(ele, index)}
              checked={checkItem[index]}
            >
              <Node {...ele} key={index}></Node>
            </CheckboxItem>
          </div>
        );
      })}
      <div className={styles['bottom']}>
        <Checkbox checked={isAllCheck} onChange={() => allChange()}>
          全选
        </Checkbox>
        <span>总价 ：{allPrice.toFixed(2)}</span>
        <Button inline={true} type="primary">
          提交订单
        </Button>
      </div>
    </div>
  );
}

function Node(props) {
  const { imgs, title, price, num, add, sub } = props;

  return (
    <div className={styles['item']}>
      <img src={imgs && imgs[0]} />
      <div className={styles['item-content']}>
        <div>{title}</div>
        <span>{(Number(price) * num).toFixed(2)}</span>
        <span
          onClick={() => {
            sub(props);
          }}
        >
          -
        </span>
        <span>{num}</span>
        <span
          onClick={() => {
            add(props);
          }}
        >
          +
        </span>
      </div>
    </div>
  );
}

const mapPropsState = ({ cart }) => {
  return { goods: [...cart.goods] };
};

export default connect(mapPropsState)(Page);
