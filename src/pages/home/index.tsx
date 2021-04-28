import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput';

export default function Page() {
  return (
    <div>
      <SearchInput></SearchInput>
      <h1 className={styles.title}>Page home/index</h1>
    </div>
  );
}
