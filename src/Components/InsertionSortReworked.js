import React, { useState, useEffect } from "react";
import BarsHolder from "./BarsHolder";
import { defaultColor } from "../constants/color";

const InsertionSortReworked = (props) => {
  const [barState, setBarState] = useState([
    { id: 1, value: 4, color: defaultColor },
    { id: 2, value: 5, color: defaultColor },
    { id: 3, value: 1, color: defaultColor },
    { id: 4, value: 2, color: defaultColor },
    { id: 5, value: 3, color: defaultColor },
  ]);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  const barsArray = [4, 5, 1, 2, 3];
  // console.log(barsArray);

  const InsertionSort = async (array) => {
    let prevArray = [];

    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let checker = i - 1;
      while (checker >= 0 && array[checker] > current) {
        array[checker + 1] = array[checker];
        checker--;
        await timer(500);
      }
      array[checker + 1] = current;
      prevArray = [...array];
      console.log("this is the prevArray:" + prevArray);
    }
    const tempArray = [];
    for (const element of array) {
      const objects = barState.find((obj) => {
        return obj.value === element;
      });

      // const objects = barState.filter((objs) => {
      //   return objs.value === element;
      // });
      await timer(500);
      tempArray.push(objects);
    }

    console.log("this is the new state:", tempArray);
  };

  //InsertionSort(barsArray);

  const handleSorting = () => {
    const barStateCopy = [...barState];

    const mapBarState = barStateCopy.map((e) => {
      return e.value;
    });
    InsertionSort(mapBarState);
    // const newMapBarState = barStateCopy;

    // //const mappingBarState = barStateCopy.filter()
    // console.log(barStateCopy);
    // console.log(mapBarState);
  };

  //useEffect(() => {}, [barsArray]);
  return (
    <div>
      <BarsHolder onSorting={handleSorting} barState={barState}></BarsHolder>
    </div>
  );
};

export default InsertionSortReworked;
