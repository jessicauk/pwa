
import React, { useState, useEffect } from 'react';
import { checkIndexedDB } from '../../utils/indexeddb/indexeddb';
import '../../utils/indexeddb/exceptions';

export function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)

  useEffect(() => {
    // useEffect is called
    console.log('useEffect is called')
    return () => {
      // Called when component unmounts
    }
  },[counter])


  const checkIDB = () => {
    checkIndexedDB();
  }

  const onClickCounter = () => {
    setCounter(counter + 1)
  }
  const onClickCounter2 = () => {
    if (counter2 % 2 === 1) {
      setCounter(prevCounter => prevCounter + 1 )
    }
    setCounter2(prevCounter => prevCounter - 1 )
  }
  

  return (
    <div>
      <p>You clicked {counter} times || {counter2} </p>
      <button onClick={onClickCounter}>
        Click Count
      </button>
      <button onClick={onClickCounter2}>
        Click Count 2
      </button>
      <button onClick={() => checkIDB()}>
        Check Indexed DB
      </button>

    </div>
  );
}