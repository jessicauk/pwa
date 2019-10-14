import { openDataBase } from './indexeddb';

const request = openDataBase('Exceptions', 1);

if (request !== null && request !== undefined) {
  request.onsuccess = () => {
    // alert('success')
  };
  request.onerror= () => {
    // alert('error')
  };
}
