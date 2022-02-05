import { transformState } from './transformState';

const state1 =  {
  foo: 'bar', bar: 'foo',
};

const transform1 = [
  {
    operation: 'addProperties', properties: {
      name: 'Jim', hello: 'world',
    },
  }, 
  {
    operation: 'removeProperties', properties: ['bar', 'hello'],
  },
  {
    operation: 'addProperties', properties: {another: 'one'},
  },
];

const state2 = {
  foo: 'bar', bar: 'foo',
};
const transform2 =   [
  {
    operation: 'addProperties', properties: {yet: 'another property'},
  }, 
  {operation: 'clear'},
  {operation: 'clear'},
  {
    operation: 'addProperties', properties: {
      foo: 'bar', name: 'Jim',
    },
  },
];
  
const state3 =  {};
const transform3 = [
  {
    operation: 'addProperties', properties: { name: 'Jim' },
  }, 
];

const result1 =  [
  {
    foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
  },
  {
    foo: 'bar', name: 'Jim',
  },
  {
    foo: 'bar', name: 'Jim', another: 'one',
  },
];

const result2 = [
  {
    foo: 'bar', bar: 'foo', yet: 'another property',
  },
  {},
  {},
  {
    foo: 'bar', name: 'Jim',
  },
];

const result3 = [
  {name: 'Jim'},
];

describe('transformState', () => {
  test('should return massive of objects', () => {
    const result = transformState(state1, transform1);

    expect(result).toStrictEqual(result1);

    expect(state1).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('should return massive of objects', () => {
    const result = transformState(state2, transform2);

    expect(result).toStrictEqual(result2);

    expect(state2).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  test('should return massive of objects', () => {
    const result = transformState(state3, transform3);

    expect(result).toStrictEqual(result3);

    expect(state3).toStrictEqual({});
  });

});