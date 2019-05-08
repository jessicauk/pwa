
import React, { useState } from 'react';
import { checkIndexedDB } from '../../utils/indexeddb/indexeddb';
import '../../utils/indexeddb/exceptions';

export function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);


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

    </div>
  );
}