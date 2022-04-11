import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import "bootstrap/dist/css/bootstrap.css";

const BarsHolder = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // barState.map((bar) => {
  //   console.log(bar);
  // });

  // const insertionSort = (array, n) => {
  //   if (n <= 1) {
  //     return;
  //   } else {
  //     insertionSort(array, n - 1);

  //     let current = array[n - 1];
  //     let arrayChecker = n - 2;

  //     while (arrayChecker >= 0 && array[arrayChecker] > current) {
  //       array[arrayChecker + 1] = array[arrayChecker];
  //       arrayChecker--;
  //     }
  //     array[arrayChecker + 1] = current;
  //     //console.log(myArray);
  //     //console.log(anotherArray);
  //     setBarState(barState);
  //     console.log(barState);
  //   }
  // };

  // useEffect(() => {
  //   insertionSort(barState, barState.length);
  // }, [barState]);
  return (
    <div style={{ overflow: "scroll" }}>
      <div
        style={{
          position: "relative",
          height: windowHeight,
          width: windowWidth,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "#3F73C9",
            margin: "auto",
            maxWidth: "1000px",
            maxHeight: "100vh",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className="d-flex justify-content-center align-middle d-flex align-items-end"
        >
          {props.barState.map((bar) => (
            <Bar key={bar.id} id={bar.id} value={bar.value}></Bar>
          ))}
        </div>
        <div style={{ position: "fixed", top: "95%", left: "50%" }}>
          <button
            type="button"
            style={{
              height: "",
              position: "-moz-initial",
              transform: "translate(-50%,-50%)",
              fontSize: "30px",
            }}
            className="btn btn-secondary"
            onClick={() => props.onSorting(props.barState)}
          >
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarsHolder;
