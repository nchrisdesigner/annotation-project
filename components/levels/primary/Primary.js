import styles from './primary.module.css'
import DroppableDiv from '../../droppableDiv/DroppableDiv'
import { useState } from 'react';
useState

function Primary(props) {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Primary Level</h3>     
        <p className={styles.valueHolder}>Insert One Value</p>
      </div>
      <DroppableDiv/>
    </div>
  )
}

export default Primary
