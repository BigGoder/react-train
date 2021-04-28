import React from 'react';
import styles from './index.less';
import SearchNav from '@/components/SearchNav';
import { List } from 'antd-mobile';
import { query } from '@/services/search';
import { useState, useCallback } from 'react';

export default function Page() {
  const [list, setList] = useState([]);
  const [pageIndex, setIndex] = useState(0);
  const [key, setKey] = useState('');

  // let params = {
  //     pageNo: pageIndex,
  //     pageSize: 10,
  //     searchKey: key
  // }
  const submit = useCallback(async (value) => {
    let response = await query({
      pageNo: pageIndex,
      pageSize: 10,
      searchKey: value,
    });
    console.log('res', response);
    if (response.status == 'ok') {
      let datas = response.list && response.list.data;
      setList(datas);
    }
  }, []);

  return (
    <div>
      <SearchNav submit={submit}></SearchNav>
    </div>
  );
}
