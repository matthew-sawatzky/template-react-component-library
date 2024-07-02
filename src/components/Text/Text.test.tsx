import React from 'react';
import { render } from '@testing-library/react';
import  '@testing-library/jest-dom';
import Text from './Text';

test('Text component is visible', () => {
  const { getByText } = render(<Text>This is a test text.</Text>);
  const textElement = getByText('This is a test text.');
  expect(textElement).toBeVisible();
});

test('Text component changes style when disabled', () => {
  const { getByText } = render(<Text disabled>This is a disabled text.</Text>);
  const textElement = getByText('This is a test text.');
  expect(textElement).toHaveStyle('color: grey');
});
