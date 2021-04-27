import { List, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './index.less';

const Item = List.Item;

function index(props) {
  const { list } = props;
  return (
    <div>
      <WingBlank size="lg">
        <WhiteSpace size="xs" />
        <List>
          {list.map((e, i) => {
            return (
              <div key={i}>
                <Item
                  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                  arrow="horizontal"
                  onClick={() => {
                    e.handleClick(i);
                  }}
                >
                  {e.title}
                </Item>
                <div className={styles.line}></div>
              </div>
            );
          })}
        </List>
      </WingBlank>
    </div>
  );
}

export default index;
