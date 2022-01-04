import classNames from "classnames/bind";
import styles from "./Square.module.css";

const cx = classNames.bind(styles);

export const Square = ({
  value,
  id,
  click,
  openedSquares,
  finishedSquares,
}) => {
  const onClick = () => {
    click(id, value);
  };

  let divClasses = cx("beforeClick", {
    afterClick: openedSquares.includes(id) || finishedSquares.includes(id),
  });

  return (
    <div className={divClasses} onClick={onClick}>
      {value}
    </div>
  );
};
