import React from 'react';
import { ListView, WingBlank, WhiteSpace, Card, Icon } from 'antd-mobile';
import { Link } from 'umi';
import Tags from '@/components/Tags';
import styles from './index.less';

function index(props) {
  const { data, pagination, queryList } = props;
  let dataSource = new ListView.DataSource({
    rowHasChanged: (r1: any, r2: any) => r1 !== r2,
  });

  const onEndReached = () => {
    if (pagination.pageNo < pagination.totalPage - 1) {
      queryList({
        pageNo: pagination.pageNo + 1,
      });
    }
  };

  return (
    <Card full>
      {data.length > 0 ? (
        <ListView
          dataSource={dataSource.cloneWithRows(data)}
          renderRow={(item) => Item(item)}
          pageSize={pagination.pageSize}
          initialListSize={pagination.pageSize}
          onEndReached={onEndReached}
          useBodyScroll={true}
          renderFooter={() => (
            <div className="txtCenter">
              {pagination.pageNo < pagination.totalPage - 1 ? (
                <Icon type="loading" />
              ) : (
                <div>加载完毕</div>
              )}
            </div>
          )}
          onEndReachedThreshold={10}
        />
      ) : (
        <div className="txtCenter font14">暂无数据</div>
      )}
    </Card>
  );
}

function Item({ img, title, price, tags, id }) {
  return (
    <WingBlank>
      <WhiteSpace size="md" />
      <Link to={'/product/' + id} className={styles.item}>
        <img src={img} />
        <div className={styles.content}>
          <span>{title}</span>
          <span>￥{price}</span>
          <Tags tags={tags} />
        </div>
      </Link>
      <div className={styles.line}></div>
    </WingBlank>

    // <WingBlank size="md">
    //   <WhiteSpace size="sm" />
    //   <Card>
    //     <Card.Header
    //       title="This is title"
    //       thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
    //       extra={<span>this is extra</span>}
    //     />
    //     <Card.Body>
    //       <div>This is content of `Card`</div>
    //     </Card.Body>
    //     <Card.Footer
    //       content="footer content"
    //       extra={<div>extra footer content</div>}
    //     />
    //   </Card>
    //   <WhiteSpace size="sm" />
    // </WingBlank>
  );
}

export default index;
