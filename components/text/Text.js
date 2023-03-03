import {useState, useEffect} from 'react'
import styles from './text.module.css'
import { BsArrowRight } from 'react-icons/bs'
import Levels from '../levels/Levels';

function Text() {
  const [next, setNext] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt, laboriosam velit magnam voluptas vitae quasi rerum quaerat nisi fugiat commodi quae facilis eveniet tempora veniam ducimus facere corrupti quas labore libero tenetur dolores hic! Quis totam facere obcaecati pariatur reprehenderit, cupiditate magni, harum odit maxime tempore quidem eligendi nesciunt sequi officiis accusantium. Consequatur iure, voluptas voluptatum repudiandae provident molestias quae, numquam hic sapiente quod, quaerat ipsa incidunt. Sit quasi labore tempore provident neque ut quia. Laboriosam veritatis obcaecati corrupti aperiam quo nesciunt, ea, maiores asperiores quis voluptatem eligendi sequi ad quasi libero voluptatum laborum sunt optio aut accusantium placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt, laboriosam velit magnam voluptas vitae quasi rerum quaerat nisi fugiat commodi quae facilis eveniet tempora veniam ducimus facere corrupti quas labore libero tenetur dolores hic! Quis totam facere obcaecati pariatur reprehenderit, cupiditate magni, harum odit maxime tempore quidem eligendi nesciunt sequi officiis accusantium. Consequatur iure, voluptas voluptatum repudiandae provident molestias quae, numquam hic sapiente quod, quaerat ipsa incidunt. Sit quasi labore tempore provident neque ut quia. Laboriosam veritatis obcaecati corrupti aperiam quo nesciunt, ea, maiores asperiores quis voluptatem eligendi sequi ad quasi libero voluptatum laborum sunt optio aut accusantium placeat.'

  useEffect(() => {
    const words = text.split(" ").map((word,index) => ({
      id:index,
      text:word,
      selected:false
    }));
    setSelectedWords(words);
  }, []);

  const handleWordClick = (wordId) => {
    if(selectedWords.filter((word) => word.selected).length >= 10){
      setDisabled(true);
      return;
    }

    setSelectedWords((prevWords) => {
      const updatedWords = prevWords.map((word) => {
        if(word.id === wordId) {
          return {
            ...word,
            selected: !word.selected
          };
        }
        return word;
      });
      return updatedWords;
    });
  }

  const selectedWordsArray = selectedWords
  .filter((word) => word.selected)
  .map((word) => word.text);

  if(next){
    return <Levels selectedWordsArray={selectedWordsArray}  />
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.primaryHeadline}>Primary Title</h1>
        <p className={styles.text}>
          {
            selectedWords.map((word) => {
              return (
                <span style={{fontWeight : word.selected ? "700" : "400", cursor: disabled || word.selected ? "default" : "pointer"}} key={word.id} onClick={() => handleWordClick(word.id)}>
                  {word.text}{" "}
                </span>
              )
            })
          }
        </p>
        <button onClick={() => setNext(!next)} className={styles.btn}>Create Levels <BsArrowRight /> </button>
    </div>
  )
}

export default Text
