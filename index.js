const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, func) {
      for(const i of arr){
        func(i);
      }
      return arr;
    },

    map: function(arr, func) {
      newarr = [];
      for(const i of arr){
        newarr.push(func(i));
      }
      return newarr;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
