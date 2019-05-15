import isNil from 'lodash/isNil';
import database from './indexedDB';

const errorData = [
  {
    error: true,
    errorType: 1,
    status: 400,
    message: 'Error !!',
    messageCode: 'EXE0000000000020',
    result: null,
  },
  {
    error: true,
    errorType: 1,
    status: 404,
    message: 'Error !!',
    messageCode: 'EXE0000000000021',
    result: null,
  },
  {
    error: true,
    errorType: 2,
    status: null,
    message: 'Error Conection!!',
    messageCode: 'EXE0000000000022',
    result: null,
  },
  {
    error: true,
    errorType: 3,
    status: null,
    message: 'Error inesperado. Favor de contactar al área de sistemas',
    messageCode: 'EXE0000000000023',
    result: null,
  },
];
const request = database('app-errors', 2);

let db;

if (isNil(request) === false) {
  console.log('request', request);

  request.onsuccess = (event) => {
    db = event.target.result;
  };

  request.onerror = (event) => {
    console.log(`error: ${event.target.errorCode}`);
    db = event.target.result;
  };

  request.onupgradeneeded = (event) => {
    // Save the IDBDatabase interface
    db = event.target.result;
    // Create an object store for this database called "error" with the autoIncrement flag set as true.
    const objectStore = db.createObjectStore('error', { autoIncrement: true });
    // Create an index to search customers by name. We may have duplicates
    // so we can't use a unique index.
    objectStore.createIndex('messageCode', 'messageCode', { unique: false });

    errorData.forEach((customer) => {
      objectStore.add(customer);
    });

    console.log('objectStore', objectStore);
  };
}

export const createError = (error) => {
  const req = db
    .transaction('errors', 'readwrite')
    .objectStore('error')
    .add(error);
  req.onsuccess = (event) => {
    // self.postMessage('Successfully added user in db');
  };

  req.onerror = (event) => {
    // self.postMessage('something went wrong here');
  };
};
export const readError = () => {
  const objectStore = db.transaction('errors').objectStore('error');
  const errors = [];
  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;

    if (cursor) {
      errors.push(cursor.value.name);
      cursor.continue();
    } else {
      // self.postMessage('Every users: ' + users.join(', '));
    }
  };
};
