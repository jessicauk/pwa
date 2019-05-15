
import React, { useState } from 'react';
import { checkIndexedDB } from '../../utils/indexeddb/indexeddb';
import '../../utils/indexeddb/exceptions';

export function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)
  const [person, setPerson] = useState(null)


  useEffect(() => {
    // useEffect is called
    console.log('useEffect is called')
    return () => {
      // Called when component unmounts
    }
  },[counter])

  const getPerson = async () => {
    try {
      const response = await fetch('https://randomuser.me/');
      const data = await response.json();
      const [item] = data;
      console.log('item', item)
      setPerson(item)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(getPerson, [])



  const checkIDB = () => {
    checkIndexedDB();
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
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