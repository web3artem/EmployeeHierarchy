import React from "react";
import {Link} from "react-router-dom";

import styles from './back.module.scss'

function Back() {
  return (
    <Link to="/">
      <div className={styles.back}>
        <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h48v48h-48z" fill="none"/>
          <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z"/>
        </svg>
        <p>На главную</p>
      </div>
    </Link>
  )
}

export default Back;