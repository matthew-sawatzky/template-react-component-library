// Button.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import  '@testing-library/jest-dom';
import Button from './Button'; 

test('Button is visible', () => {
  const { getByRole } = render(<Button />);
  const buttonElement = getByRole('button');
  expect(buttonElement).toBeVisible();
});

test('Button changes style when disabled', () => {
  const { getByRole } = render(<Button disabled={true} />); // Pass disabled prop correctly
  const buttonElement = getByRole('button');
  expect(buttonElement).toHaveStyle('color: GrayText'); // Example style check for disabled state
});