import "./App.css";
import React, { useState } from "react";
import Dices from "./components/Dices";
import Categories from "./components/Categories";
function App() {
    const [diceEyes, setDiceEyes] = useState([]);
    const [LockDice, setLockDice] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const [leftRoll, setLeftRoll] = useState(3);
    const [One, setOne] = useState("");
    const [Two, setTwo] = useState("");
    const [Three, setThree] = useState("");
    const [Four, setFour] = useState("");
    const [Five, setFive] = useState("");
    const [Six, setSix] = useState("");
    const [Choice, setChoice] = useState("");
    const [FourOfAKind, setFourOfAKind] = useState("");
    const [FullHouse, setFullHouse] = useState("");
    const [Sstraight, setSstraight] = useState("");
    const [Lstraight, setLstraight] = useState("");
    const [Yacht, setYacht] = useState("");
    const [Total, setTotal] = useState(0);
    const rolling = () => {
        if (leftRoll > 0) {
            if (diceEyes.toString() === "") {
                setDiceEyes([
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                    Math.floor(Math.random() * 6 + 1),
                ]);
            }
            else {
                let NewDice = diceEyes.map((dice, index) => LockDice[index] ? dice : Math.floor(Math.random() * 6 + 1));
                setDiceEyes(NewDice);
            }
            setLeftRoll(leftRoll - 1);
        }
    };
    const Lock = (index) => {
        setLockDice(LockDice.map((lock, i) => (index === i ? !lock : lock)));
    };
    const reset = (number) => {
        setTotal(Total + number);
        setLeftRoll(3);
        setDiceEyes([]);
        setLockDice([false, false, false, false, false]);
    };
    const SaveOne = () => {
        if (One.toString() === "" && diceEyes.toString() !== "") {
            let one = diceEyes.filter((e) => e === 1);
            if (one.toString() !== "") {
                let oneTotal = one.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setOne(oneTotal.toString());
                reset(oneTotal);
            }
            else {
                setOne("0");
                reset(0);
            }
        }
    };
    const SaveTwo = () => {
        if (Two.toString() === "" && diceEyes.toString() !== "") {
            let two = diceEyes.filter((e) => e === 2);
            if (two.toString() !== "") {
                let twoTotal = two.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setTwo(twoTotal.toString());
                reset(twoTotal);
            }
            else {
                setTwo("0");
                reset(0);
            }
        }
    };
    const SaveThree = () => {
        if (Three.toString() === "" && diceEyes.toString() !== "") {
            let three = diceEyes.filter((e) => e === 3);
            if (three.toString() !== "") {
                let threeTotal = three.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setThree(threeTotal.toString());
                reset(threeTotal);
            }
            else {
                setThree("0");
                reset(0);
            }
        }
    };
    const SaveFour = () => {
        if (Four.toString() === "" && diceEyes.toString() !== "") {
            let four = diceEyes.filter((e) => e === 4);
            if (four.toString() !== "") {
                let fourTotal = four.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setFour(fourTotal.toString());
                reset(fourTotal);
            }
            else {
                setFour("0");
                reset(0);
            }
        }
    };
    const SaveFive = () => {
        if (Five.toString() === "" && diceEyes.toString() !== "") {
            let five = diceEyes.filter((e) => e === 5);
            if (five.toString() !== "") {
                let fiveTotal = five.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setFive(fiveTotal.toString());
                reset(fiveTotal);
            }
            else {
                setFive("0");
                reset(0);
            }
        }
    };
    const SaveSix = () => {
        if (Six.toString() === "" && diceEyes.toString() !== "") {
            let six = diceEyes.filter((e) => e === 6);
            if (six.toString() !== "") {
                let sixTotal = six.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setSix(sixTotal.toString());
                reset(sixTotal);
            }
            else {
                setSix("0");
                reset(0);
            }
        }
    };
    const SaveChoice = () => {
        if (Choice.toString() === "" && diceEyes.toString() !== "") {
            let ChoiceTotal = diceEyes.reduce((prev, cur) => {
                return (prev += cur);
            });
            setChoice(ChoiceTotal.toString());
            reset(ChoiceTotal);
        }
    };
    const SaveFourOfAKind = () => {
        if (FourOfAKind.toString() === "" && diceEyes.toString() !== "") {
            const result = diceEyes.reduce((accu, curr) => {
                accu[curr] = (accu[curr] || 0) + 1;
                return accu;
            }, []);
            let SameNumber = result.filter((e) => e === 4 || e === 5);
            if (SameNumber.length > 0) {
                let FourOfAKindTotal = diceEyes.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setFourOfAKind(FourOfAKindTotal.toString());
                reset(FourOfAKindTotal);
            }
            else {
                setFourOfAKind("0");
                reset(0);
                }
        }
    };
    const SaveFullHouse = () => {
        if (FullHouse.toString() === "" && diceEyes.toString() !== "") {
            const result = diceEyes.reduce((accu, curr) => {
                accu[curr] = (accu[curr] || 0) + 1;
                return accu;
            }, []);
            let SameNumber = result.filter((e) => e != null).sort();
            if (SameNumber.toString() === [2, 3].toString()) {
                let FullHouseTotal = diceEyes.reduce((prev, cur) => {
                    return (prev += cur);
                });
                setFullHouse(FullHouseTotal.toString());
                reset(FullHouseTotal);
            }
            else {
                setFullHouse("0");
                reset(0);
            }
        }
    };
    const SaveSstraight = () => {
        if (Sstraight.toString() === "" && diceEyes.toString() !== "") {
            let Straight = diceEyes.sort();
            let StraightNoSame = new Set(Straight);
            let StraightArr = Array.from(StraightNoSame);
            if (StraightArr.toString() === [1, 2, 3, 4].toString() ||
                StraightArr.toString() === [2, 3, 4, 5].toString() ||
                StraightArr.toString() === [3, 4, 5, 6].toString() ||
                StraightArr.toString() === [1, 2, 3, 4, 5].toString() ||
                StraightArr.toString() === [1, 2, 3, 4, 6].toString() ||
                StraightArr.toString() === [2, 3, 4, 5, 6].toString()) {
                setSstraight("15");
                reset(15);
            }
            else {
                setSstraight("0");
                reset(0);
            }
        }
    };
    const SaveLstraight = () => {
        if (Lstraight.toString() === "" && diceEyes.toString() !== "") {
            let sortArry = diceEyes.sort();
            if (sortArry.toString() === [1, 2, 3, 4, 5].toString() ||
                sortArry.toString() === [2, 3, 4, 5, 6].toString()) {
                setLstraight("30");
                reset(30);
            }
            else {
                setLstraight("0");
                reset(0);
            }
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
                setYacht("50");
                reset(50);
            }
            else {
                setYacht("0");
                reset(0);
            }
        }
    };
    if (One.toString() !== "" &&
        Two.toString() !== "" &&
        Three.toString() !== "" &&
        Four.toString() !== "" &&
        Five.toString() !== "" &&
        Six.toString() !== "" &&
        Choice.toString() !== "" &&
        FourOfAKind.toString() !== "" &&
        FullHouse.toString() !== "" &&
        Sstraight.toString() !== "" &&
        Lstraight.toString() !== "" &&
        Yacht.toString() !== "") {
        let userName = prompt("닉네임을 입력해주세요! 최종 스코어 :" + Total, "익명");
        if (userName === null) {
            userName = "익명";
        }
        localStorage.setItem(userName, Total.toString());
        //Id의 숫자가 1늘어남
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
        setFive("");
        setSix("");
        setChoice("");
        setFourOfAKind("");
        setFullHouse("");
        setSstraight("");
        setLstraight("");
        setYacht("");
        setTotal(0);
        setLeftRoll(3);
        setDiceEyes([]);
        setLockDice([false, false, false, false, false]);
    }
    const RecordScore = () => {
        let arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key != null) {
                let EndScore = localStorage.getItem(key);
                const Item = {
                    NickName: key,
                    Score: EndScore,
                };
                arr.push(Item);
            }
            else {
                break;
            }
        }
        arr.sort(function (a, b) {
            // 오름차순
            return a - b;
        });
        const arrDom = arr.map((arr, index) => (<div key={arr.NickName} id={index.toString()}>
        {arr.NickName} : {arr.Score}
      </div>));
        return arrDom;
    };
    return (<div className="Window">
      <Dices diceEyes={diceEyes} Lock={Lock} LockDice={LockDice}/>

      <div className="Roll">
        <button onClick={rolling}>주사위 굴리기</button>
        <span>남은 재굴림 : {leftRoll} </span>
      </div>

      <Categories One={One} Two={Two} Three={Three} Four={Four} Five={Five} Six={Six} SaveOne={SaveOne} SaveTwo={SaveTwo} SaveThree={SaveThree} SaveFour={SaveFour} SaveFive={SaveFive} SaveSix={SaveSix} Choice={Choice} FourOfAKind={FourOfAKind} FullHouse={FullHouse} Sstraight={Sstraight} Lstraight={Lstraight} Yacht={Yacht} SaveChoice={SaveChoice} SaveFourOfAKind={SaveFourOfAKind} SaveFullHouse={SaveFullHouse} SaveSstraight={SaveSstraight} SaveLstraight={SaveLstraight} SaveYacht={SaveYacht}/>

      <div>점수표</div>
      {RecordScore()}
    </div>);
}
export default App;
