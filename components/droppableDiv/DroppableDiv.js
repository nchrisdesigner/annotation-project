import {useState} from 'react'
import {useDrop} from 'react-dnd'
import styles from './droppablediv.module.css'

function DroppableDiv(props) {


    function handleDragOver(e){
        e.preventDefault();
        e.currentTarget.style.background = "cyan";
    }

    function handleDrop(e){
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(data);
        e.currentTarget.appendChild(draggableElement);
        e.currentTarget.style.background = "";
    }
  
    return (
      <div
      droppable
      onDragOver={handleDragOver}
      onDrop={handleDrop}
        style={{ backgroundColor: props.isDraggingOver ? 'lightblue' : 'white' }}
        className={styles.droppableContainer}
      >
        {props.children}
      </div>
    );
  }

export default DroppableDiv
