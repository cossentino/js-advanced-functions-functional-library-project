const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let key = Object.keys(collection)[i]
        callback(collection[key])
      }
      return collection
    },

    map: function(collection, callback) {
      const r = []
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let key = Object.keys(collection)[i]
        r.push(callback(collection[key]))
      }
      return r
    },

    reduce: function(collection, callback, init) {
      let r = (!!init) ? init : collection[0]
      let i = (!!init) ? 0 : 1
      const keys = Object.keys(collection)
      for (; i < keys.length; i++) {
        let key = keys[i]
        r = callback(r, collection[key])
      }
      return r
    },

    find: function(collection, predicate) {
      let value
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (predicate(collection[key])) {
          value = collection[key]
          return value
        }
      }
      return value
    },

    filter: function(collection, predicate) {
      let values = []
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (predicate(collection[key])) {
          values.push(collection[key])
        }
      }
      return values
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n=1) {
      const values = array.slice(0,n)
      if (values.length === 1) {
        return values[0]
      } else {
        return values
      }
    },

    last: function(array, n=1) {
      const values = array.slice((n * -1))
      if (values.length === 1) {
        return values[0]
      } else {
        return values
      }
    },

    compact: function(array) {
      const r = []
      array.forEach(e => {
        if (!!e) { r.push(e) }
      })
      return r
    },

    sortBy: function(array, callback) {
      const r = [...array]
      r.sort((a,b) => callback(a) - callback(b))
      return r
    },

    flatten: function flatten(array, singleLevel) {
      const r = []
      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (typeof current === "object") {
          if (!singleLevel) {
            r.push(...flatten(current))
          } else {
            r.push(...current)
          }
        } else {
          r.push(current)
        }
      }
      return r
    },

    uniq: function(array, callback) {
      const r = []
      let a
      if (!callback) {
        a = [...array]
      } else {
        a = array.map(e => callback(e))
      } 
      a.forEach(e => {
        if (!r.includes(e)) {
          r.push(e)
        }
      })
      return r
    }




  }
})()

fi.libraryMethod()
