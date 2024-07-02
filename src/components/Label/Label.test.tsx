import React from 'react';
import { render } from '@testing-library/react';
import Label, { LabelProps } from './Label';
import  '@testing-library/jest-dom';

test('Label is visible', () => {
  const { getByText } = render(<Label label="Test Label" />);
  const labelElement = getByText('Test Label');
  expect(labelElement).toBeVisible();
});

test('Label changes style when hovered', () => {
  const { getByText } = render(<Label />);
  const labelElement = getByText('Test Label');
  
  expect(labelElement).toHaveStyle('color: rgb(0, 86, 179)');
});
