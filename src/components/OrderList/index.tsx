import React from 'react';
import { List, WingBlank, WhiteSpace, Card } from 'antd-mobile';

function index() {
  return <div></div>;
}

function Item(props) {
  return (
    <WingBlank size="md">
      <WhiteSpace size="sm" />
      <Card>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
      <WhiteSpace size="sm" />
    </WingBlank>
  );
}

export default index;
