import React from "react";
import CateTop from "./CateTop";
import CateBottom from "./CateBottom";

const Categories = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <CateTop
            One={props.One}
            Two={props.Two}
            Three={props.Three}
            Four={props.Four}
            Five={props.Five}
            Six={props.Six}
            SaveOne={props.SaveOne}
            SaveTwo={props.SaveTwo}
            SaveThree={props.SaveThree}
            SaveFour={props.SaveFour}
            SaveFive={props.SaveFive}
            SaveSix={props.SaveSix}
          />
        </tbody>
      </table>

      <div>Bonus if 1-6 are over 63 points</div>

      <table>
        <tbody>
          <tr>
            <td>
              <button className="Choice" onClick={props.SaveChoice}>
                Choice
              </button>
            </td>
            <td>{props.Choice}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <CateBottom
            Choice={props.Choice}
            FourOfAKind={props.FourOfAKind}
            FullHouse={props.FullHouse}
            Sstraight={props.Sstraight}
            Lstraight={props.Lstraight}
            Yacht={props.Yacht}
            SaveChoice={props.SaveChoice}
            SaveFourOfAKind={props.SaveFourOfAKind}
            SaveFullHouse={props.SaveFullHouse}
            SaveSstraight={props.SaveSstraight}
            SaveLstraight={props.SaveLstraight}
            SaveYacht={props.SaveYacht}
          />
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Total</td>
            <td>
              {Number(props.One) +
                Number(props.Two) +
                Number(props.Three) +
                Number(props.Four) +
                Number(props.Five) +
                Number(props.Six) >=
              63
                ? Number(props.One) +
                  Number(props.Two) +
                  Number(props.Three) +
                  Number(props.Four) +
                  Number(props.Five) +
                  Number(props.Six) +
                  Number(props.Choice) +
                  Number(props.FourOfAKind) +
                  Number(props.FullHouse) +
                  Number(props.Sstraight) +
                  Number(props.Lstraight) +
                  Number(props.Yacht) +
                  35
                : Number(props.One) +
                  Number(props.Two) +
                  Number(props.Three) +
                  Number(props.Four) +
                  Number(props.Five) +
                  Number(props.Six) +
                  Number(props.Choice) +
                  Number(props.FourOfAKind) +
                  Number(props.FullHouse) +
                  Number(props.Sstraight) +
                  Number(props.Lstraight) +
                  Number(props.Yacht)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Categories;
