import React from "react";

const Bonus = (props) => {
  return (
    <>
      <tr>
        <td>Bonus</td>
        <td>
          {Number(props.One) +
            Number(props.Two) +
            Number(props.Three) +
            Number(props.Four) +
            Number(props.Five) +
            Number(props.Six) >=
          63
            ? "+35"
            : Number(props.One) +
              Number(props.Two) +
              Number(props.Three) +
              Number(props.Four) +
              Number(props.Five) +
              Number(props.Six) +
              "/63"}
        </td>
      </tr>
    </>
  );
};

export default Bonus;
