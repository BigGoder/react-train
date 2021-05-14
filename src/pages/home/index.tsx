import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput';

export default function Page() {
  const handle = (e) => {
    e.preventDefault();
    console.log('begin');
  };
  const handleClick = (e) => {
    console.log('click');
  };

  return (
    <div>
      <SearchInput></SearchInput>
      <h1 className={styles.title} onClick={handleClick} onContextMenu={handle}>
        Page home/index
      </h1>
    </div>
  );
}
