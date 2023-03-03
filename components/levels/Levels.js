import {useState} from 'react'
import Values from '../values/Values'
import styles from './levels.module.css'
import { BsCheck2Circle } from 'react-icons/bs'
import Congratulations from '../congratulations/Congratulations';

function Levels({selectedWordsArray}) {
  const [next,setNext] = useState(false);

  if(next){
    return <Congratulations />
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.primaryHeadline}>Primary Title</h1>
        <h3 className={styles.secondaryHeadline}>Secondary Welcome Message</h3>
        <Values selectedWordsArray={selectedWordsArray} />
      </div>
      <button onClick={() =>setNext(true)} className={styles.btn}>Complete <BsCheck2Circle /></button>
    </>
    
  )
}

export default Levels
