function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (const value of values) {
        callback(value);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      const values = Object.values(collection);
      for (const value of values) {
        result.push(callback(value));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? collection[0] : initialValue;
    if (Array.isArray(collection)) {
      for (let i = initialValue === undefined ? 1 : 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      let isFirst = true;
      for (const key in collection) {
        if (isFirst && initialValue === undefined) {
          accumulator = collection[key];
          isFirst = false;
        } else {
          accumulator = callback(accumulator, collection[key], key, collection);
        }
      }
    }
    return accumulator;
  }
  
  

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (const item of collection) {
        if (predicate(item)) {
          return item;
        }
      }
    } else {
      const values = Object.values(collection);
      for (const value of values) {
        if (predicate(value)) {
          return value;
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (const item of collection) {
        if (predicate(item)) {
          result.push(item);
        }
      }
    } else {
      const values = Object.values(collection);
      for (const value of values) {
        if (predicate(value)) {
          result.push(value);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n = 1) {
    if (n === 1) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  
  function myLast(collection, n = 1) {
    if (n === 1) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }
  