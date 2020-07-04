'Use strict';

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  return arr1.length === arr2.length && arr1.every((a, i) => a === arr2[i]);
}

function memorize(fn, limit) {
  let memory = [];
  return function(...args) {
  if (memory.find(a => a.args.length === args.length && a.args.every((a, i) => a === args[i]))) {
      console.log('Такой массив уже существует')
      return fn(...args);
    } else {
        memory.push({args: args, result: fn(...args)});
        console.log(memory);
     }
  
    if (memory.length > limit) {
      memory.shift();
    }

    return memory[memory.length - 1].result;
  }
}

function testCase(testFunction, nameTimer) {
  let arrArgs = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  
  console.time(nameTimer);
  for (let a = 0; a <= 100; a++) {
    arrArgs.forEach(a => testFunction(...a));
  }
  console.timeEnd(nameTimer);
}