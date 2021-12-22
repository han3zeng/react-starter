/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Main Render Testing', () => {
  render(<Main />);
  expect(screen.getByText('this is main page!what!!')).toBeInTheDocument();
});
