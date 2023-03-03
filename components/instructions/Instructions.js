import {useState} from 'react'
import styles from './instructions.module.css'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import Text from '../text/Text'

// BsCheck2Circle

function Instructions() {
    const [next, setNext] = useState(false);

    if(next){
      return <Text />
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.primaryHeadline}>Instructions Message</h1>
      <h3 className={styles.secondaryHeadline}>Secondary Instructions Message</h3>
      <ul className={styles.instructionsList}>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
      </ul>

      <button onClick={() => setNext(!next)} className={styles.btn}>Collect Values <BsArrowRight /> </button>
    </div>
  )
}

export default Instructions
