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

  it('add', () => {
    const a = 10,
      b = 5;

    expect(operate.add(a, b)).toBe(15);
  });

  it('add', () => {
    const a = 75,
      b = 25;

    expect(operate.add(a, b)).toBe(100);
  });

  it('rest', () => {
    const a = 8,
      b = 6;

    expect(operate.subtract(a, b)).toBe(2);
  });

  it('rest', () => {
    const a = 810,
      b = 10;

    expect(operate.subtract(a, b)).toBe(800);
  });

  it('rest', () => {
    const a = 200,
      b = 60;

    expect(operate.subtract(a, b)).toBe(140);
  });

  it('multiply', () => {
    const a = 2,
      b = 2;

    expect(operate.multiply(a, b)).toBe(4);
  });

  it('multiply', () => {
    const a = 12,
      b = 12;

    expect(operate.multiply(a, b)).toBe(144);
  });

  it('multiply', () => {
    const a = 20,
      b = 6;

    expect(operate.multiply(a, b)).toBe(120);
  });

  it('divide', () => {
    const a = 15,
      b = 5;

    expect(operate.divide(a, b)).toBe(3);
  });

  it('divide', () => {
    const a = 150,
      b = 5;

    expect(operate.divide(a, b)).toBe(30);
  });

  it('divide', () => {
    const a = 90,
      b = 3;

    expect(operate.divide(a, b)).toBe(30);
  });
});

describe('task 4',() => {
it('captal letter', () => {
  const string = 'federico'

  expect(firstCap(string)).toBe("Federico");
});
});