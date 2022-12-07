import React from "react";
import Dice from "./Dice";

interface T {
  diceEyes: number[];
  Lock: Function;
  LockDice: boolean[];
}

const Dices = (props: T) => {
  return (
    <>
      <div className="Dices">
        {props.diceEyes.map((dice, index) => (
          <Dice
            key={index + "dice"}
            dice={dice}
            index={index}
            Lock={props.Lock}
            LockDice={props.LockDice}
          />
        ))}
      </div>
    </>
  );
};

export default Dices;
