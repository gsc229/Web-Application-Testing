import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('contains Balls and Strikes on scoreboard', () => {
  // Arrange
  const container = render(<Display />);
  /* console.log(container); */
  // Act getting the node by text
  container.getByText(/balls/i); //regX the i is case insensitive a or A both can accept
  container.getByText(/strikes/i);
  // Assertion is if  ^^^ is truthy
});
