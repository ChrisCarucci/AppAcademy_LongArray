const findMinimum = arr => {

  // Your code here
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < minNum) {
      minNum = arr[i]
    }
  }
  return minNum;
};


const runningSum = arr => {

  if (arr.length < 1) {
    return [];
  }

  // Your code here
  newArray = [arr[0]];

  for (let i = 1; i < arr.length; i++) {

    newArray.push(arr[i]+(newArray[i-1]))
  }

  return newArray;
};


const evenNumOfChars = arr => {
  let count = 0;

  for (let i = 0;  i < arr.length; i++) {
    if(arr[i].length % 2 != 0) {
      continue
    } else {
      count++;
    }
  }
  return count;
}

const smallerThanCurr = arr => {

  // Your code here
  let newArray = [];
  let count = 0;

  for (let number1 of arr) {
    for (let number2 of arr) {
      if (number1 > number2) {
        count++;
      }
    }
    newArray.push(count)
    count = 0;
  }
  return newArray;
};



const twoSum = (arr, target) => {

  // Your code here
  for (let number1 of arr) {
    for (let number2 of arr) {
      if (number1+number2 === target) {
        return true;
      }
    }
  }
  return false;

};



const secondLargest = arr => {

  // Your code here
  arr.sort();
  return arr[arr.length-2]

};



const shuffle = array => {
  copyArray = array.slice()

    var i = array.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = copyArray[j];
      copyArray[j] = copyArray[i];
      copyArray[i] = temp;
    }
    console.log("CopyArray = " + copyArray)
    return copyArray;
  };


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];