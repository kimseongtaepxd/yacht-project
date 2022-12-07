import CateTD from "./CateTD";
import React from "react";

interface T {
  Choice: string;
  FourOfAKind: string;
  FullHouse: string;
  Sstraight: string;
  Lstraight: string;
  Yacht: string;
  SaveChoice: React.MouseEventHandler<HTMLButtonElement>;
  SaveFourOfAKind: React.MouseEventHandler<HTMLButtonElement>;
  SaveFullHouse: React.MouseEventHandler<HTMLButtonElement>;
  SaveSstraight: React.MouseEventHandler<HTMLButtonElement>;
  SaveLstraight: React.MouseEventHandler<HTMLButtonElement>;
  SaveYacht: React.MouseEventHandler<HTMLButtonElement>;
}
const CateBottom = (props: T) => {
  const Cate = [
    {
      id: "4 of a Kind",
      Class: "FourOfAKind",
      Number: props.FourOfAKind,
      Function: props.SaveFourOfAKind,
    },
    {
      id: "Full House",
      Class: "FullHouse",
      Number: props.FullHouse,
      Function: props.SaveFullHouse,
    },
    {
      id: "S. Straight",
      Class: "Sstraight",
      Number: props.Sstraight,
      Function: props.SaveSstraight,
    },
    {
      id: "L. Straight",
      Class: "Lstraight",
      Number: props.Lstraight,
      Function: props.SaveLstraight,
    },
    {
      id: "Yacht",
      Class: "Yacht",
      Number: props.Yacht,
      Function: props.SaveYacht,
    },
  ];

  return (
    <>
      {Cate.map((cate) => (
        <CateTD
          key={cate.id}
          Name={cate.id}
          Class={cate.Class}
          Number={cate.Number}
          Function={cate.Function}
        />
      ))}
    </>
  );
};

export default CateBottom;
