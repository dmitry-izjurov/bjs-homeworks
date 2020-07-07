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
    let memoryFind = memory.find(a => compareArrays(a.args, args));

    if (memoryFind) {
      console.log('Такой массив уже существует');
      return memoryFind.result;
    }
  
    memory.push({args: args, result: fn(...args)});
  
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