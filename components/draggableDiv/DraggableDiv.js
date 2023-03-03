import React from 'react'
import styles from './draggablediv.module.css'
import {useDrag} from 'react-dnd'

function DraggableDiv({key,id,value}) {

    function handleDragStart(e){
        e.dataTransfer.setData('text/plain', e.target.id);
        console.log(e.target.id);
        e.currentTarget.style.background = "tomato";
        e.currentTarget.style.color = "white";
    }

    function handleDragEnd(e){
        e.currentTarget.style.background = "";
        e.currentTarget.style.color = "";
    }

    console.log(id);

  return (
    <div 
    className={styles.valueContainer} 
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    key={key} 
    id={id} 
    draggable 
    >
        {value}
    </div>
  )
}

export default DraggableDiv
