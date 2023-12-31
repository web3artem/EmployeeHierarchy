import React from "react";

import styles from './arrow.module.scss'

function SortingArrow({sortOrder}) {
  const arrowUp = <svg className={styles.svg} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
    <path d="M0-.75h48v48h-48z" fill="none"/>
  </svg>


  const arrowDown = <svg className={styles.svg} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"/>
    <path d="M0 0h48v48h-48z" fill="none"/>
  </svg>

  if (sortOrder === "" || sortOrder === "desc") {
    return (
      <>
        {sortOrder === "desc" ? "" : arrowDown}
      </>
    )
  } else {
    return arrowUp
  }

}

export default SortingArrow;