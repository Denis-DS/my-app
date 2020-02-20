import React from "react";
import Button from "../Button";
import Counter from "../Counter";
import style from "./style.module.css";

export default props => {
  const bttn = ["+", "-"];

  const [counter, setCounter] = React.useState(0);
  const func = i => {
    if (i === "+") {
      return counter <= 0 ? setCounter(counter + 1) : setCounter(counter + 1);
    } else {
      return counter <= 0 ? setCounter(counter) : setCounter(counter - 1);
    }
  };
  return (
    <div className={style.Counter}>
      <div className={style.Text}>
        <Counter counterValue={counter} />
        <p className={style.Text}>{props.text}</p>
      </div>
      <div className={style.ButtonsContainer}>
        {bttn.map(i => (
          <Button buttonClick={() => func(i)} Simbol={i} key={i} />
        ))}
      </div>
    </div>
  );
};
