import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import  '@testing-library/jest-dom';

test('RadioButton is visible', () => {
  render(<RadioButton label="Test RadioButton" />);
  const radioButton = screen.getByLabelText('Test RadioButton');
  expect(radioButton).toBeVisible();
});

test('RadioButton changes background color when disabled', () => {
  render(<RadioButton label="Disabled RadioButton" disabled />);
  const radioButton = screen.getByLabelText('Disabled RadioButton');
  expect(radioButton).toHaveStyle('background-color: grey');
});
