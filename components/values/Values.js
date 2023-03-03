import { useState } from 'react'
import DraggableDiv from '../draggableDiv/DraggableDiv'
import Primary from '../levels/primary/Primary'
import Secondary from '../levels/secondary/Secondary'
import Tertiary from '../levels/tertiary/Tertiary'
import styles from './values.module.css'


function Values({selectedWordsArray}) {

  return (
    <div className={styles.container}>
      <div className={styles.valuesContainer}>
        {selectedWordsArray.map((value, index) => {
            return (
                // <div key={index} id={index} className={styles.valueContainer}>{value}</div>
                <DraggableDiv key={index} id={index} draggable="true" value={value} />
            )
        })}
      </div>
      <div className={styles.levelsContainer}>
        <Primary />
        <Secondary />
        <Tertiary />
      </div>
    </div>
  )
}

export default Values
