import styles from './index.less';
import SearchNav from '@/components/SearchNav';
import List from '@/components/OrderList';
import { query } from '@/services/search';
import { useState, useCallback, useEffect } from 'react';

export default function Page() {
  let params = {
    pageNo: 0,
    pageSize: 10,
    searchKey: '',
  };

  const [searchkey, setKey] = useState('');
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(params);
  const [name, setName] = useState('');

  useEffect(() => {
    submit({
      pageNo: 0,
    });
  }, [searchkey]);

  const search = (value) => {
    setKey(value);
    setName('zzh');
    console.log('key', searchkey);
    console.log('name', name);

    //submit({pageNo:0})
  };

  const submit = useCallback(async (value) => {
    let params = {
      ...pagination,
      pageNo: value.pageNo,
      searchKey: searchkey,
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
