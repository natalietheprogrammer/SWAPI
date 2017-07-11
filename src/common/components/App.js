import React from 'react';
import styles from '../../common/base.css';


export default ({children}) => {
  return (
    <div id="container" className={styles.pageWrap}>
      {children}
    </div>
  );
}
