export const checkIndexedDB = () => {
  if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB. Tal y como las características no serán validas");
  }
}

export const openDataBase = (namedb, version) => {
  if (window.indexedDB) {
    return window.indexedDB.open(namedb, version);
  }
  return {};
}

/*
const checkIndexeDBSupport = () => {
  let isSupported = true;
  if (!window.indexedDB) {
    isSupported = false;
  }
  return isSupported;
};

export default (namedb, version) => {
  let openDataBase = null;
  if (checkIndexeDBSupport()) {
    openDataBase = window.indexedDB.open(namedb, version);
  }

  return openDataBase;
};
*/
