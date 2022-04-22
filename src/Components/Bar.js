import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Bar = (props) => {
  //import color stuff here from props
  return (
    <div
      style={{
        width: "100px",
        height: `${100 * props.value}px`,
        backgroundColor: props.barColor,
        textAlign: "center",
        paddingLeft: "40px",
      }}
      className="border border-warning border-4 rounded m-5 d-flex align-items-center"
    >
      {props.value}
    </div>
  );
};

export default Bar;
