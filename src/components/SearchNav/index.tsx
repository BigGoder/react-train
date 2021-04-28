import { Icon, SearchBar, WingBlank, Flex } from 'antd-mobile';
import styles from './index.less';
import { history } from 'umi';
import { useState } from 'react';

export default function index(props) {
  const initValue = '书本';
  const [value, setValue] = useState(initValue);
  const { submit } = props;

  const leftClick = () => {
    history.goBack();
  };

  return (
    <Flex className="searchHead">
      <Icon type="left" size="md" onClick={leftClick}></Icon>
      <SearchBar
        className="searchContent"
        placeholder={value}
        maxLength={8}
        onSubmit={(value) => {
          setValue(value);
          submit(value);
        }}
        onClear={(value) => {
          setValue('');
        }}
      />
    </Flex>
  );
}
