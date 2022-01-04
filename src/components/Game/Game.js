import { Board } from "../Board/Board";
import { Comment } from "../Comment";
import { useState } from "react";
import styles from "./Game.module.css";
import { Header } from "../Header";
import { Button } from "../Button/Button";

export const Game = () => {
  const [comment, setComment] = useState("");
  const [stateOfButton, setStateOfButton] = useState(false);

  const getDataBoard = (result) => {
    setComment(result);
  };

  const getStateOfButton = () => {
    setStateOfButton(!stateOfButton);
  };

  const startOver = () => {};

  return (
    <div className={styles.game}>
      <Header />
      <Board getDataBoard={getDataBoard} getStateOfButton={getStateOfButton} />
      <Button stateOfButton={stateOfButton} startOver={startOver} />
      {comment && <Comment data={comment} />}
    </div>
  );
};
