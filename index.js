import SimpleStore from './src/simple-local-storage.js';

export default function SimpleStoreFactory(options) {
  options = options || {};
  var store = global.localStorage;
  if(options.sessionStorage === true) {
    store = global.sessionStorage;
  }

  return new SimpleStore(store);
}
