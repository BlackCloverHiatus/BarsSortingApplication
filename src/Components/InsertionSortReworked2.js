import React, { useState, useEffect } from "react";
import BarsHolder from "./BarsHolder";
import { defaultColor } from "../constants/color";

const InsertionSortReworked2 = (props) => {
  const [barState, setBarState] = useState([
    { id: 1, value: 4, color: defaultColor },
    { id: 2, value: 5, color: defaultColor },
    { id: 3, value: 1, color: defaultColor },
    { id: 4, value: 2, color: defaultColor },
    { id: 5, value: 3, color: defaultColor },
  ]);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const insertionSort = async (inputArr) => {
    let arrayLength = inputArr.length;
    let previousArray = [];
    for (let i = 1; i < arrayLength; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];

      // The last element of our sorted subarray
      let checker = i - 1;
      //sorted subarray
      while (checker > -1 && current < inputArr[checker]) {
        console.log(barState);
        compareBars(current, inputArr[checker + 1]);
        await timer(200);
        inputArr[checker + 1] = inputArr[checker];

        checker--;
      }
      inputArr[checker + 1] = current;

      if (previousArray.toString() !== inputArr.toString()) {
        updateBar(inputArr);
        await timer(800);
      }
      previousArray = [...inputArr];
    }

    return inputArr;
  };

  const compareBars = (valueA, valueB) => {
    const barA = getBarFromValue(valueA);
    barA.color = "pink";
    const barB = getBarFromValue(valueB);
    barB.color = "pink";

    const updatedBarState = barState.map((bar) => {
      if (bar.value === valueA) {
        return barA;
      } else if (bar.value === valueB) {
        return barB;
      } else {
        return bar;
      }
    });
    //bumabalik siya sa first state
    //await timer(1000);
    setBarState(updatedBarState);
  };

  const updateBar = (updatedArray) => {
    const sortedBars = [];
    for (const value of updatedArray) {
      const bar = getBarFromValue(value);
      bar.color = defaultColor;
      sortedBars.push(bar);
    }
    console.log("updating sort");
    setBarState(sortedBars);
  };

  const getBarFromValue = (value) => {
    return barState.find((bar) => bar.value === value);
  };

  //InsertionSort(barsArray);

  const handleSorting = () => {
    const array = barState.map((bar) => bar.value);
    insertionSort(array);
  };

  //useEffect(() => {}, [barsArray]);
  return (
    <div>
      <BarsHolder onSorting={handleSorting} barState={barState}></BarsHolder>
    </div>
  );
};

export default InsertionSortReworked2;
