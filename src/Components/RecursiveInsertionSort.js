import React, { useState, useEffect } from "react";
import BarsHolder from "./BarsHolder";
import { defaultColor } from "../constants/color";
import useTimeOutFunction from "./useTimeOutFunction";

const RecursiveInsertionSort = (props) => {
  const [anotherArray, setAnotherArray] = useState([10, 7, 8, 6, 9]);
  const [barState, setBarState] = useState([
    { id: 1, value: 4, color: defaultColor },
    { id: 2, value: 5, color: defaultColor },
    { id: 3, value: 1, color: defaultColor },
    { id: 4, value: 2, color: defaultColor },
    { id: 5, value: 3, color: defaultColor },
  ]);
  // //console.log(myArray);
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
  //     setAnotherArray(anotherArray);
  //     console.log(anotherArray);
  //   }
  // };

  // const waitForMe = async (ms) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve("");
  //     }, ms);
  //   });
  // };

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const insertionSort2 = async (mappedValues, numberOfElements, barObjects) => {
    if (numberOfElements <= 1) {
      return;
    } else {
      for (let i = 0; i < numberOfElements; i++) {
        insertionSort2(mappedValues, numberOfElements - 1, barObjects);
        await timer(250);
      }
      let current = mappedValues[numberOfElements - 1];
      let arrayChecker = numberOfElements - 2;

      while (arrayChecker >= 0 && mappedValues[arrayChecker] > current) {
        mappedValues[arrayChecker + 1] = mappedValues[arrayChecker];
        arrayChecker--;
      }
      mappedValues[arrayChecker + 1] = current;
      //console.log(myArray);
      //console.log(anotherArray);

      //this is where I should setState
      //create array element nung bar, which is sorted na
      //mappedValues is mapBarState
      //Maraming salamat, Kuya Monchit!
      const temporaryArray = [];

      for (const element of mappedValues) {
        //for each element ng nasa array, so di ka lalagpas talaga sa laman ng array na which is 5 elements
        //await timer(1000);
        const object = barObjects.find((obj) => {
          return obj.value === element;
        });
        temporaryArray.push(object);
      }

      setBarState(temporaryArray);
      console.log("setting State", temporaryArray);
    }

    //setBarState dito sa sampleArray
  };

  const handleSorting = () => {
    const barStateCopy = [...barState];

    const mapBarState = barStateCopy.map((e) => {
      return e.value;
    });

    const newMapBarState = barStateCopy;

    //const mappingBarState = barStateCopy.filter()
    console.log(barStateCopy);
    console.log(mapBarState);

    insertionSort2(mapBarState, mapBarState.length, barStateCopy);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log("This will be called after 2 seconds");
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [barState]);

  // useEffect(() => {
  //   insertionSort(anotherArray, anotherArray.length);
  // }, [anotherArray]);

  //insertionSort(myArray, myArray.length);

  return (
    <div>
      <BarsHolder onSorting={handleSorting} barState={barState}></BarsHolder>
    </div>
  );
};

export default RecursiveInsertionSort;

//gagamit setTimeOut and callback. debounce (main thing), async await
