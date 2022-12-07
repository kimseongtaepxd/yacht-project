import React from "react";

interface T {
  Name: string;
  Class: string;
  Number: string;
  Function: React.MouseEventHandler<HTMLButtonElement>;
}
const CateTD = (props: T) => {
  return (
    <tr>
      <td>
        <button className={props.Class} onClick={props.Function}>
          {props.Name}
        </button>
      </td>
      <td>{props.Number}</td>
    </tr>
  );
};

export default CateTD;
