import React from 'react';
import { render } from '@testing-library/react';
import DashBoard, { addStrike, addBall, foulBall, hit } from './Dashboard';

test('addStrike adds up to two strikes before going back to zero', () => {
  expect(addStrike(0)).toBe(1);
  expect(addStrike(1)).toBe(2);
  expect(addStrike(2)).toBe(0);
  expect(addStrike(9)).toBe(0);
});

test('addBall adds up to three balls before going back to zero', () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(1)).toBe(2);
  expect(addBall(2)).toBe(3);
  expect(addBall(3)).toBe(0);
});

test('hit resets to everything to zero', () => {
  expect(hit(0)).toBe(0);
});
