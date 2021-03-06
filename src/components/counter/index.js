
import React, { useState, useEffect } from 'react';
import { checkIndexedDB } from '../../utils/indexeddb/indexeddb';
import '../../utils/indexeddb/exceptions';

const Counter = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)
  const [person, setPerson] = useState(null)

  const getPerson = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?format=json');
      console.log('resp', response);
      const data = await response.json();
      console.log('data', data)
      /*const [item] = data;
      console.log('item', item)
      setPerson(item) */
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getPerson()
  }, [])
  
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
      <div>
        {
          person && <b>{person.name}</b>
        }
      </div>

    </div>
  );
}

export default Counter;