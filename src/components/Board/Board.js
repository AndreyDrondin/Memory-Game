import { Square } from "../Square/Square";
import styles from "./Board.module.css";
import { useState } from "react";

// Создаем массив с числами в случайном порядке

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let shuffle = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let tmp = arr[i];
    let rnd = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[rnd];
    arr[rnd] = tmp;
  }
  return arr;
};

let randomNumbers = shuffle(numbers);
let finishedSquares = [];

export const Board = ({ getDataBoard, getStateOfButton }) => {
  const [openedSquares, setOpenedSquares] = useState([]);

  const click = (id) => {
    if (finishedSquares.includes(id) || openedSquares[0] === id) {
      return;
    }
    getDataBoard("");
    if (openedSquares.length < 2) {
      setOpenedSquares([...openedSquares, id]);
      if (
        openedSquares.length > 0 &&
        randomNumbers[openedSquares[0]] === randomNumbers[id]
      ) {
        getDataBoard("Совпадение!");
        setTimeout(() => {
          getDataBoard("");
        }, 2000);
      }
      if (
        openedSquares.length > 0 &&
        randomNumbers[openedSquares[0]] !== randomNumbers[id]
      ) {
        getDataBoard("Мимо...");
        setTimeout(() => {
          getDataBoard("");
        }, 2000);
      }
    }

    if (openedSquares.length === 2) {
      if (randomNumbers[openedSquares[0]] === randomNumbers[openedSquares[1]]) {
        finishedSquares = [
          ...finishedSquares,
          openedSquares[0],
          openedSquares[1],
        ];
      }
      setOpenedSquares([id]);
    }
    if (
      finishedSquares.length === 14 &&
      randomNumbers[openedSquares[0]] === randomNumbers[id]
    ) {
      setTimeout(getStateOfButton(), 2500);
    }
  };

  return (
    <div className={styles.board}>
      {randomNumbers.map((randomNumber, i) => (
        <Square
          value={randomNumber}
          key={i}
          id={i}
          click={click}
          openedSquares={openedSquares}
          finishedSquares={finishedSquares}
        ></Square>
      ))}
    </div>
  );
};
