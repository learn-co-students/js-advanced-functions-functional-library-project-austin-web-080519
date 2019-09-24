const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arg, func) {
      const coll = (arg.constructor === Array) ? arg : Object.values(arg);
      for(const i of coll){
        func(i);
      }
      return arg;
    },

    map: function(arg, func) {
      let newarr = [];
      const coll = (arg.constructor === Array) ? arg : Object.values(arg);
      for(const i of coll){
        newarr.push(func(i));
      }
      return newarr;
    },

    reduce: function(arr, func, acc) {
      let newarr = arr;
			if (!acc) {
				acc = newarr[0];
				newarr = newarr.slice(1);
			}
			for (const i of newarr) {
				acc = func(acc, i, newarr)
			}
			return acc;
    },

    find: function(arr, func) {
      for(const i of arr){
        if(func(i)){
          return i;
        }
      }
    },

    filter: function(arr, func) {
      let newarr = [];
      for(const i of arr){
        if(func(i)){
          newarr.push(i);
        }
      }
      return newarr;
    },

    size: function(arg) {
      return (arg.constructor === Array) ? arg.length : Object.values(arg).length
    },

    first: function(arr, n=1) {
      return (n === 1) ? arr[0] : arr.slice(0, n);
    },

    last: function(arr, n=1) {
      let newarr = arr;
      return (n === 1) ? newarr[newarr.length-n] : newarr.splice(arr.length-n, n);
    },

    compact: function(arr) {
      return arr.filter(e => !!e);
    },

    sortBy: function(arr, func) {
      let newarr = arr.slice(0);
      return newarr.sort((a, b) => func(a) - func(b));
    },

    flatten: function(arr, shal=false) {
      let newarr;
      if (shal) {
        newarr = arr.flatMap(a => a);
      }
      else {
        newarr = arr.flat(Infinity);
      }
      return newarr;
    },

    uniq: function(arr, sorted=false, func=false) {
      let newarr;
      if(sorted){
        newarr = [arr[0]];
        for(let i = 1; i < arr.length; i++){
          if(arr[i] === sorted[i-1]){
            newarr.push(arr[i]);
          }
        }
      }
      else if(!func){
        newarr = Array.from(new Set(arr));
      }
      else {
        let newvals = new Set();
        let vals = new Set();
        for(const i of arr){
          let val = func(i);
          if(!newvals.has(val)){
            newvals.add(val);
            vals.add(i);
          }
        newarr = Array.from(vals);
        }
      }
      return newarr;
    },

    keys: function(obj) {
      let keys = [];
      for(const k in obj){
        keys.push(k);
      }
      return keys;
    },
    
    values: function(obj) {
      let vals = [];
      for(const k in obj){
        vals.push(obj[k]);
      }
      return vals;
    },

    functions: function(obj) {
      let names = [];
      for(const k in obj){
        if (typeof obj[k] === 'function'){
          names.push(obj[k].name);
        }
      }
      return names.sort();
    }


  }
})()

fi.libraryMethod()
