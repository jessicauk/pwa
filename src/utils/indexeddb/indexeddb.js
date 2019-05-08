export const checkIndexedDB = () => {
  if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
  }
}

export const openDataBase = (namedb, version) => {
  return window.indexedDB.open(namedb, version);
}
