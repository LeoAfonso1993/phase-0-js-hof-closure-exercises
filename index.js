
function forEach(array, callback){
  for (let num = 0; num < array.length; num++) {
      callback(array[num], num, array)
  }
}

const i = function(num) {
  console.log(num)
}

const team = [1, 2, 3, 4, 5]
console.log(forEach(team, i))

function map(array, callback) {
  const newArray = []
  for( let i = 0; i < array.length; i++)
  newArray.push(callback(array[i]))
  return newArray
  
}

function filter(array, callback) {
  const newArray = []
  for( let i = 0; i < array.length; i++) 
  if (callback(array[i]) === true){
    newArray.push(array[i])
  }
  return newArray
  
}

const original = [1, 2, 3, 4, 5];
const result = filter(original, (el) => el % 2 === 0);


function every(array, callback) {
  const isTrue = (i) => callback(i);
  return array.every(isTrue)

}

const origin = ['ace', 'cat', 'dog', 'pit'];
const res = every(origin, (el) => el.length === 3);

function some(array, callback) {
  const isTrue = (i) => callback(i);
  return array.some(isTrue)

}

function majority(array, callback) {
  falseArray = []
  trueArray = []
  for (let i = 0; i < array.length; i++){
    if(callback(array[i]) === true){
      trueArray.push(array[i])
    } else {
      falseArray.push(array[i])
    }
  }
  if (trueArray.length > falseArray.length){
    return true
  }else {
    return false
  }
}
const ori = [20, 21, 22, 23, 24, 25, 26, 27, 28]
const resul = majority(ori, (el) => el % 2 === 0);
console.log(resul)

let upres = 0

function once(fn, context) {
  let result;
  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

function multiplier(num) {
  console.log(num * 2);
}

var multiplyByTwoOnce = once(multiplier);

multiplyByTwoOnce(5); // hello world
multiplyByTwoOnce(10)


const input = [4.2, 6.1, 6.3];

const groupBy = function(array, key){
  const arr = []
  for (let i = 0; i < array.length; i++){
    if(key == parseInt(array[i])){
      arr.push(array[i])
    }
  }
  const intNum = parseInt(key)
  const obj = {key: arr}
  return obj
};

console.log(groupBy(input, 6))
  
  //The function should return an object. Each return value of the callback should be a key of 
  //the object and the values should be the input element with which the callback was called.
 
  
  
const inp = ['cat', 'dog', 'bird'];

function arrayToObject(arr, callback) {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
          const key = callback(arr[i])

          obj[arr[i]] = obj[key] || callback(arr[i])
      }
  }
  return obj
}


module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};