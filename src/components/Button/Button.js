import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Button = ({ stateOfButton, startOver }) => {
  let buttonClasses = cx("button", {
    endOfTheGame: stateOfButton,
  });

  const onClick = () => {
    startOver();
  };

  return (
    <button className={buttonClasses} onClick={onClick}>
      Начать заново
    </button>
  );
};
