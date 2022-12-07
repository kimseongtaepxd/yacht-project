import React from "react";

interface T {
  dice: number;
  index: number;
  Lock: Function;
  LockDice: boolean[];
}
const Dices = (props: T) => {
  return (
    <button
      onClick={() => {
        props.Lock(props.index);
      }}
      className={props.LockDice[props.index] ? "Lock" : "Open"}
    >
      {props.dice}
    </button>
  );
};

export default Dices;
