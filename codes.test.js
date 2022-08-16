const { stringCount, stringReverse, operate,firstCap } = require('./codes');

describe('Task 1', () => {
  it('stringlenght', () => {
    const st = 'Federico';

    expect(stringCount(st)).toBe(8);
  }); 

  it('stringlenght error 1', () => {
    const st = 'supercalifragilistic';

    expect(() => stringCount(st)).toThrow(Error);
  });
});

describe('Task 2', () => {
  it('Reverse STR', () => {
    const st = 'Guatemala';

    expect(stringReverse(st)).toBe('alametauG');
  });
});
describe('Task 3', () => {
  it('add', () => {
    const a = 2,
      b = 8;

    expect(operate.add(a, b)).toBe(10);
  });

  it('rest', () => {
    const a = 8,
      b = 6;

    expect(operate.subtract(a, b)).toBe(2);
  });

  it('multiply', () => {
    const a = 2,
      b = 2;

    expect(operate.multiply(a, b)).toBe(4);
  });

  it('divide', () => {
    const a = 15,
      b = 5;

    expect(operate.divide(a, b)).toBe(3);
  });
});

describe('task 4',() => {
it('captal letter', () => {
  const string = 'capital'

  expect(firstCap(string)).toBe("Capital");
});
});