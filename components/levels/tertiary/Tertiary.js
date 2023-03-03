import styles from './tertiary.module.css'
import DroppableDiv from '../../droppableDiv/DroppableDiv'

function Tertiary() {
    return (
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h3>Tertiary Level</h3>     
            <p className={styles.valueHolder}>Insert Five Values</p>
          </div>
          <DroppableDiv/>
        </div>
      )
}

export default Tertiary
