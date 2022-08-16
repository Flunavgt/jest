const stringCount = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String should be less than 10 characters');
  }
}; 

const stringReverse = (string) => {
  let newString = '';
  newString = string.split('').reverse().join('');
  return newString;
};

class Operations {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const firstCap = (string) =>{
    let firstletter =  string[0].toUpperCase(), st = string.slice(1);
    return firstletter + st
}

const operate = new Operations




module.exports = { stringCount, stringReverse, operate, firstCap };