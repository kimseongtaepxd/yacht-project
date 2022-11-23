import "./App.css";
import { useState } from "react";

function App() {
  const [diceEyes, setDiceEyes] = useState([]);
  const [leftRoll, setLeftRoll] = useState(3);
  const [One, setOne] = useState([]);
  const [Two, setTwo] = useState([]);
  const [Three, setThree] = useState([]);
  const [Four, setFour] = useState([]);
  const [Five, setFive] = useState([]);
  const [Six, setSix] = useState([]);
  const [Choice, setChoice] = useState([]);
  const [FourOfAKind, setFourOfAKind] = useState([]);
  const [FullHouse, setFullHouse] = useState([]);
  const [Sstraight, setSstraight] = useState([]);
  const [Lstraight, setLstraight] = useState([]);
  const [Yacht, setYacht] = useState([]);

  const rolling = () => {
    if (leftRoll > 0) {
      setDiceEyes([
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
      ]);
      setLeftRoll(leftRoll - 1);
    }
  };

  const SaveOne = () => {
    if (One.toString() === "" && diceEyes.toString() !== "") {
      let one = diceEyes.filter((e) => e === 1);

      if (one.toString() !== "") {
        let oneTotal = one.reduce((prev, cur) => {
          return (prev += cur);
        });
        setOne(oneTotal);
      } else {
        setOne(0);
      }

      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveTwo = () => {
    if (Two.toString() === "" && diceEyes.toString() !== "") {
      let two = diceEyes.filter((e) => e === 2);
      if (two.toString() !== "") {
        let twoTotal = two.reduce((prev, cur) => {
          return (prev += cur);
        });
        setTwo(twoTotal);
      } else {
        setTwo(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveThree = () => {
    if (Three.toString() === "" && diceEyes.toString() !== "") {
      let three = diceEyes.filter((e) => e === 3);
      if (three.toString() !== "") {
        let threeTotal = three.reduce((prev, cur) => {
          return (prev += cur);
        });
        setThree(threeTotal);
      } else {
        setThree(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveFour = () => {
    if (Four.toString() === "" && diceEyes.toString() !== "") {
      let four = diceEyes.filter((e) => e === 4);
      if (four.toString() !== "") {
        let fourTotal = four.reduce((prev, cur) => {
          return (prev += cur);
        });
        setFour(fourTotal);
      } else {
        setFour(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveFive = () => {
    if (Five.toString() === "" && diceEyes.toString() !== "") {
      let five = diceEyes.filter((e) => e === 5);
      if (five.toString() !== "") {
        let fiveTotal = five.reduce((prev, cur) => {
          return (prev += cur);
        });
        setFive(fiveTotal);
      } else {
        setFive(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveSix = () => {
    if (Six.toString() === "" && diceEyes.toString() !== "") {
      let six = diceEyes.filter((e) => e === 6);
      if (six.toString() !== "") {
        let sixTotal = six.reduce((prev, cur) => {
          return (prev += cur);
        });
        setSix(sixTotal);
      } else {
        setSix(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveChoice = () => {
    if (Choice.toString() === "" && diceEyes.toString() !== "") {
      let ChoiceTotal = diceEyes.reduce((prev, cur) => {
        return (prev += cur);
      });
      setChoice(ChoiceTotal);
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveFourOfAKind = () => {
    if (FourOfAKind.toString() === "" && diceEyes.toString() !== "") {
      const result = diceEyes.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
      }, []);

      let SameNumber = result.filter((e) => (e === 4) | (e === 5));
      if (SameNumber.length > 0) {
        let FourOfAKindTotal = diceEyes.reduce((prev, cur) => {
          return (prev += cur);
        });
        setFourOfAKind(FourOfAKindTotal);
      } else {
        setFourOfAKind(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveFullHouse = () => {
    if (FullHouse.toString() === "" && diceEyes.toString() !== "") {
      const result = diceEyes.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
      }, []);

      let SameNumber = result.filter((e) => e !== "").sort();

      if (SameNumber.toString() === [2, 3].toString()) {
        let FullHouseTotal = diceEyes.reduce((prev, cur) => {
          return (prev += cur);
        });
        setFullHouse(FullHouseTotal);
      } else {
        setFullHouse(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveSstraight = () => {
    if (Sstraight.toString() === "" && diceEyes.toString() !== "") {
      let DeleteSame = new Set(diceEyes);
      let Straight = [...DeleteSame];
      Straight = Straight.sort();

      if (
        (Straight.toString() === [1, 2, 3, 4].toString()) |
        (Straight.toString() === [2, 3, 4, 5].toString()) |
        (Straight.toString() === [3, 4, 5, 6].toString()) |
        (Straight.toString() === [1, 2, 3, 4, 5].toString()) |
        (Straight.toString() === [1, 2, 3, 4, 6].toString()) |
        (Straight.toString() === [2, 3, 4, 5, 6].toString())
      ) {
        setSstraight(15);
      } else {
        setSstraight(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveLstraight = () => {
    if (Lstraight.toString() === "" && diceEyes.toString() !== "") {
      let sortArry = diceEyes.sort();
      if (
        (sortArry.toString() === [1, 2, 3, 4, 5].toString()) |
        (sortArry.toString() === [2, 3, 4, 5, 6].toString())
      ) {
        setLstraight(30);
      } else {
        setLstraight(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  const SaveYacht = () => {
    if (Yacht.toString() === "" && diceEyes.toString() !== "") {
      const result = diceEyes.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
      }, []);

      let SameNumber = result.filter((e) => e === 5);

      if (SameNumber.length > 0) {
        setYacht(50);
      } else {
        setYacht(0);
      }
      setLeftRoll(3);
      setDiceEyes([]);
    }
  };

  return (
    <>
      {diceEyes.map((dice, index) => (
        <button key={index + "dice"}>{dice}</button>
      ))}
      <button onClick={rolling}>주사위 굴리기</button>
      <div>남은 재굴림 : {leftRoll} </div>
      <button onClick={SaveOne}>one</button>
      <div>{One}</div>
      <button onClick={SaveTwo}>two</button>
      <div>{Two}</div>
      <button onClick={SaveThree}>three</button>
      <div>{Three}</div>
      <button onClick={SaveFour}>four</button>
      <div>{Four}</div>
      <button onClick={SaveFive}>five</button>
      <div>{Five}</div>
      <button onClick={SaveSix}>six</button>
      <div>{Six}</div>
      <button onClick={SaveChoice}>choice</button>
      <div>{Choice}</div>
      <button onClick={SaveFourOfAKind}>FourOfAKind</button>
      <div>{FourOfAKind}</div>
      <button onClick={SaveFullHouse}>FullHouse</button>
      <div>{FullHouse}</div>
      <button onClick={SaveSstraight}>Sstraight</button>
      <div>{Sstraight}</div>
      <button onClick={SaveLstraight}>Lstraight</button>
      <div>{Lstraight}</div>
      <button onClick={SaveYacht}>Yacht</button>
      <div>{Yacht}</div>
      <div>
        총합 :{" "}
        {Number(One) +
          Number(Two) +
          Number(Three) +
          Number(Four) +
          Number(Five) +
          Number(Six) +
          Number(Choice) +
          Number(FourOfAKind) +
          Number(FullHouse) +
          Number(Sstraight) +
          Number(Lstraight) +
          Number(Yacht)}
      </div>
    </>
  );
}

export default App;
