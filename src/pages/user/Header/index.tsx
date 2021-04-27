import { Card, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

const personal = [
  {
    num: 168,
    title: '商品关注',
    link: '',
  },
  {
    num: 9,
    title: '店铺关注',
    link: '',
  },
  {
    num: 0,
    title: '喜欢的内容',
    link: '',
  },
  {
    num: 100,
    title: '浏览记录',
    link: '',
  },
];

function Header(props) {
  let { name, userid, icon } = props;
  return (
    <div className={styles.personInfo}>
      <WingBlank size="sm">
        <WhiteSpace size="xs" />
        <Card full className={styles.personInfo}>
          <Card.Header
            title={name}
            thumb={icon}
            extra={<span>{userid}</span>}
          />
          <Card.Body>
            <Flex justify="between">
              {personal.map((item, index) => {
                return (
                  <Flex.Item
                    key={index}
                    className={classnames(styles.txtCenter1)}
                  >
                    <div>{item.title}</div>
                    <div>{item.num}</div>
                  </Flex.Item>
                );
              })}
            </Flex>
          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}

export default Header;
