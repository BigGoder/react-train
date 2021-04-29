import styles from './index.less';
import SearchNav from '@/components/SearchNav';
import List from '@/components/OrderList';
import { query } from '@/services/search';
import { useState, useCallback, useEffect } from 'react';

export default function Page() {
  let params = {
    pageNo: 0,
    pageSize: 10,
  };

  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(params);

  useEffect(() => {
    submit({
      pageNo: 0,
    });
  }, []);

  const search = (value) => {
    submit({ pageNo: 0, key: value });
  };

  const submit = useCallback(async (value) => {
    let params = {
      ...pagination,
      pageNo: value.pageNo,
      searchKey: value.key,
    };

    let response = await query(params);
    if (response.status == 'ok') {
      let datas = response.list && response.list.data;
      setPagination(response.list.pagination);
      if (response.list.pagination.pageNo > 0) {
        setList((list) => [...list, ...datas]);
      } else {
        setList(datas);
      }
    }
  }, []);

  return (
    <div>
      <SearchNav submit={search}></SearchNav>
      <List data={list} pagination={pagination} queryList={submit}></List>
    </div>
  );
}

// Page
