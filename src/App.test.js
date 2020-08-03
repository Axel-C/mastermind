import React from 'react';
const calculateHint = require('./hintService')

test('perfect match', () => {
  let guess = [0,0,0,0];
  let code = [0,0,0,0];
  let expected = [4,0];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('wrong order', () => {
  let guess = [1,2,3,4];
  let code = [4,3,2,1];
  let expected = [0,4];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('no match and no color', () => {
  let guess = [1,2,2,3];
  let code = [0,4,4,0];
  let expected = [0,0];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('no duplicate found when color only found in a match', () => {
  let guess = [1,2,0,0];
  let code = [1,1,4,4];
  let expected = [1,0];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('duplicate found when color found in a match', () => {
  let guess = [1,2,0,1];
  let code = [1,1,4,4];
  let expected = [1,1];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('duplicate found when color found in a match', () => {
  let guess = [1,2,0,1];
  let code = [1,1,4,4];
  let expected = [1,1];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('no duplicate found when color is found multiple time in the code', () => {
  let guess = [1,0,0,0];
  let code = [3,1,1,1];
  let expected = [0,1];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});

test('no duplicate found when color is found multiple time in the guess', () => {
  let guess = [3,1,1,1];
  let code = [1,0,0,0];
  let expected = [0,1];
  expect(calculateHint(guess , code)).toStrictEqual(expected); 
});


