import React from "react";

const CateTD = (props) => {
  return (
    <tr>
      <td>
        <button className={props.Name} onClick={props.Function}>
          {props.Name}
        </button>
      </td>
      <td>{props.Number}</td>
    </tr>
  );
};

export default CateTD;
