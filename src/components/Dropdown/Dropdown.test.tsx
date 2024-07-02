// Dropdown.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import  '@testing-library/jest-dom';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  const { getByRole } = render(<Dropdown />);
  const dropdownElement = getByRole('combobox');
  expect(dropdownElement).toBeVisible();
});

test('Dropdown changes style when disabled', () => {
  const { getByRole } = render(<Dropdown disabled />);
  const dropdownElement = getByRole('combobox');
  expect(dropdownElement).toHaveStyle('color: black');
});
