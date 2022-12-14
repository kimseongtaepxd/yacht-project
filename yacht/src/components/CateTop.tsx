import React from "react";
import CateTD from "./CateTD";
import Bonus from "./Bonus";

interface T {
  One: string;
  Two: string;
  Three: string;
  Four: string;
  Five: string;
  Six: string;
  SaveOne: React.MouseEventHandler<HTMLButtonElement>;
  SaveTwo: React.MouseEventHandler<HTMLButtonElement>;
  SaveThree: React.MouseEventHandler<HTMLButtonElement>;
  SaveFour: React.MouseEventHandler<HTMLButtonElement>;
  SaveFive: React.MouseEventHandler<HTMLButtonElement>;
  SaveSix: React.MouseEventHandler<HTMLButtonElement>;
}

const CateTop = (props: T) => {
  const Cate = [
    {
      id: "Aces",
      Class: "One",
      Number: props.One,
      Function: props.SaveOne,
    },
    {
      id: "Deuces",
      Class: "Two",
      Number: props.Two,
      Function: props.SaveTwo,
    },
    {
      id: "Threes",
      Class: "Three",
      Number: props.Three,
      Function: props.SaveThree,
    },
    {
      id: "Fours",
      Class: "Four",
      Number: props.Four,
      Function: props.SaveFour,
    },
    {
      id: "Fives",
      Class: "Five",
      Number: props.Five,
      Function: props.SaveFive,
    },
    {
      id: "Sixs",
      Class: "Six",
      Number: props.Six,
      Function: props.SaveSix,
    },
  ];

  return (
    <>
      {Cate.map((cate) => (
        <CateTD
          key={cate.id}
          Class={cate.Class}
          Name={cate.id}
          Number={cate.Number}
          Function={cate.Function}
        />
      ))}
      <Bonus
        One={props.One}
        Two={props.Two}
        Three={props.Three}
        Four={props.Four}
        Five={props.Five}
        Six={props.Six}
      />
    </>
  );
};

export default CateTop;
