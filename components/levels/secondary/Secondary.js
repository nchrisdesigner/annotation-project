import styles from './secondary.module.css'
import DroppableDiv from '../../droppableDiv/DroppableDiv'

function Secondary() {
    return (
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h3>Secondary Level</h3>     
            <p className={styles.valueHolder}>Insert Three Values</p>
          </div>
          <DroppableDiv/>
        </div>
      )
}

export default Secondary
