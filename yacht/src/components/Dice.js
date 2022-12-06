import React from "react";

const Dices = (props) => {
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
