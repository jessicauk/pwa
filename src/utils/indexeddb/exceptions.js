import { openDataBase } from './indexeddb';

const request = openDataBase('Exceptions', 1);

request.onsuccess = () => {
  // alert('success')
};
request.onerror= () => {
  // alert('error')
};