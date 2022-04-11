import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Bar = (props) => {
  return (
    <div
      style={{
        width: "100px",
        height: `${100 * props.value}px`,
        backgroundColor: "#FFE598",
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
