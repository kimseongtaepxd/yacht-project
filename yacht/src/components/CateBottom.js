import CateTD from "./CateTD";

const CateBottom = (props) => {
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
          Number={cate.Number}
          Function={cate.Function}
        />
      ))}
    </>
  );
};

export default CateBottom;
